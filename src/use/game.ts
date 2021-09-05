import { useEffect, useState } from 'react'
import { useControllerContext } from '../context/controller'
import NewCursor from '../lib/cursor/new'
import nextGame from '../lib/game/next'
import interpret from '../lib/interpret'
import LookupSearch from '../lib/search/lookup'
import { Game } from '../types'

export default function useGame (): Game {
  const { game: controlled } = useControllerContext()

  const newCursor = NewCursor(controlled)
  const newGame = { ...controlled, cursor: newCursor }
  const { cursor, history } = LookupSearch(newGame)

  const initial = { ...newGame, cursor, history }

  const [game, setGame] = useState(initial)

  function effect (): () => void {
    function tick (): void {
      setGame?.(nextGame)
    }

    const delay = interpret({
      understanding: game.cursor.understanding,
      is: 200,
      not: 0,
      already: 0,
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
