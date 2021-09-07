import { useEffect, useState } from 'react'

import { useControllerContext } from '../context/controller'

import LookupCursor from '../lib/cursor/lookup'
import NewCursor from '../lib/cursor/new'

import nextGame from '../lib/game/next'

import interpret from '../lib/interpret'

import { Game } from '../types'

export default function useGame (): Game {
  const { game: controlled } = useControllerContext()

  const newCursor = NewCursor(controlled)
  const newGame = { ...controlled, cursor: newCursor }
  const cursor = LookupCursor(newGame)
  const history = [...newGame.history, cursor]

  const initial = { ...newGame, cursor, history }

  const [game, setGame] = useState(initial)

  type Effecter = () => void

  function effect (): undefined | Effecter {
    function tick (): void {
      setGame?.(nextGame)
    }

    const delay = game.block == null
      ? interpret({
        understanding: game.cursor.understanding,
        is: 0,
        not: 0,
        already: 0,
        empty: 20000
      })
      : 200

    const interval = setInterval(tick, delay)

    const clear = (): void => clearInterval(interval)

    return clear
  }

  useEffect(effect, [game])

  return game
}
