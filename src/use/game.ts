import { useEffect, useState } from 'react'

import { useControllerContext } from '../context/controller'

import createCursor from '../lib/cursor/create'
import LookupCursor from '../lib/cursor/lookup'

import createDelay from '../lib/delay'

import dropGame from '../lib/game/drop'
import nextGame from '../lib/game/next'

import { Game } from '../types'
import { useHotkeys } from 'react-hotkeys-hook'

export default function useGame (): Game {
  const { game: controlled } = useControllerContext()

  const createdCursor = createCursor(controlled)
  const createdGame = { ...controlled, cursor: createdCursor }

  const cursor = LookupCursor(createdGame)
  const history = [...createdGame.history, cursor]

  const initial = { ...createdGame, cursor, history }

  const [game, setGame] = useState(initial)

  const [down, setDown] = useState(false)
  function onDown (event: KeyboardEvent): void {
    const isDown = event.type === 'keydown'
    if (isDown) {
      setDown(true)
    }

    const isUp = event.type === 'keyup'
    if (isUp) {
      setDown(false)
    }
  }
  useHotkeys('s,down', onDown, { keydown: true, keyup: true })

  function control (): Cleaner | undefined {
    function tick (): void {
      setGame?.(dropGame)
    }

    if (down) {
      const interval = setInterval(tick, 200)

      const clear = (): void => {
        clearInterval(interval)
      }

      return clear
    }
  }
  useEffect(control, [down])

  type Cleaner = () => void

  function effect (): Cleaner {
    function tick (): void {
      setGame?.(nextGame)
    }

    const delay = createDelay({ game })

    const interval = setInterval(tick, delay)

    function clear (): void {
      clearInterval(interval)
    }

    return clear
  }

  useEffect(effect, [game])

  return game
}
