import { useEffect, useState } from 'react'

import { useControllerContext } from '../context/controller'

import createCursor from '../lib/cursor/create'
import LookupCursor from '../lib/cursor/lookup'

import createDelay from '../lib/delay'

import nextGame from '../lib/game/next'

import { Effect, Game } from '../types'

import useControls from './controls'

export default function useGame (): Game {
  const { game: controlled } = useControllerContext()

  const createdCursor = createCursor(controlled)
  const createdGame = { ...controlled, cursor: createdCursor }

  const cursor = LookupCursor(createdGame)
  const history = [...createdGame.history, cursor]

  const initial = { ...createdGame, cursor, history }

  const [game, setGame] = useState(initial)

  const { controlling, gamer, repeating } = useControls()

  function control (): Effect {
    function tick (): void {
      setGame?.(gamer)
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
  useEffect(control, [controlling, gamer, repeating])

  function effect (): Effect {
    function tick (): void {
      setGame?.(nextGame)
    }

    if (!controlling || !game.cursor.invisible) {
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
