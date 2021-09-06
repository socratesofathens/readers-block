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

  function effect (): () => void {
    function tick (): void {
      setGame?.(nextGame)
    }

    const delay = interpret({
      understanding: game.cursor.understanding,
      is: 100,
      not: 200,
      already: 500,
      empty: 10000
    })

    const interval = setInterval(tick, delay)

    function clear (): void {
      return clearInterval(interval)
    }

    return clear
  }

  useEffect(effect, [game])

  return game
}
