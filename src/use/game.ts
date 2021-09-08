import { useEffect, useState } from 'react'

import { useControllerContext } from '../context/controller'

import LookupCursor from '../lib/cursor/lookup'
import createCursor from '../lib/cursor/create'
import createDelay from '../lib/delay'

import nextGame from '../lib/game/next'

import { Game } from '../types'

export default function useGame (): Game {
  const { game: controlled } = useControllerContext()

  const createdCursor = createCursor(controlled)
  const createdGame = { ...controlled, cursor: createdCursor }

  const cursor = LookupCursor(createdGame)
  const history = [...createdGame.history, cursor]

  const initial = { ...createdGame, cursor, history }

  const [game, setGame] = useState(initial)

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
