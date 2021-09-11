import { useEffect, useState } from 'react'

import { useControllerContext } from '../context/controller'

import createCursor from '../lib/cursor/create'
import lookupCursor from '../lib/cursor/lookup'

import createDelay from '../lib/delay'
import gameGamers from '../lib/game/gamers'

import nextGame from '../lib/game/next'

import { Effect, Game } from '../types'

import useControls from './controls'

export default function useGame (): Game {
  const { game: controlled } = useControllerContext()

  const createdCursor = createCursor(controlled)
  const createdGame = { ...controlled, cursor: createdCursor }

  const cursor = lookupCursor(createdGame)
  const history = [...createdGame.history, cursor]

  const notDefined = cursor.understanding.definition == null

  const words = notDefined
    ? createdGame.words
    : [...createdGame.words, cursor]

  const initial = { ...createdGame, cursor, history, words }

  const [game, setGame] = useState(initial)

  const {
    controlling, gamer, repeating,
    north, south, east, west, clock, counter
  } = useControls()

  function control (): Effect {
    const setters = gameGamers({ north, south, east, west, clock, counter })
    console.log('setters test:', setters)

    function set (game: Game): Game {
      let newGame = { ...game }

      setters.forEach(setter => {
        const newerGame = setter(newGame)

        newGame = newerGame
      })

      return newGame
    }

    function tick (): void {
      setGame?.(set)
    }

    if (controlling) {
      tick()

      const delay = 100

      if (repeating) {
        const interval = setInterval(tick, delay)

        const clear = (): void => {
          clearInterval(interval)
        }
        return clear
      }

      return undefined
    }

    return undefined
  }
  useEffect(control, [controlling, gamer, north, south, east, west, clock, counter, repeating])

  function effect (): Effect {
    function tick (): void {
      setGame?.(nextGame)
    }

    if (!controlling) {
      const delay = createDelay({ game })

      const interval = setInterval(tick, delay)

      const clear = (): void => {
        clearInterval(interval)
      }

      return clear
    }

    return undefined
  }

  useEffect(effect, [game, controlling])

  return game
}
