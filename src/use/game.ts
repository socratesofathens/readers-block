import { useEffect, useState } from 'react'
import { useControllerContext } from '../context/controller'
import NewCursor from '../lib/cursor/new'
import interpret from '../lib/interpret'
import LookupSearch from '../lib/search/lookup'
import NextSearch from '../lib/search/next'
import { Board, Cursor, Game } from '../types'

interface Field {
  board: Board
  cursor: Cursor
}

function remove (game: Game): Field {
  const { board, cursor } = game
  const defined = cursor.understanding.definition != null

  if (defined) {
    const newBoard = [...board]
    const { row, start, end } = cursor
    const oldRow = newBoard[row]
    const newRow = [...oldRow]

    const nextEnd = end + 1
    const difference = nextEnd - start
    const length = { length: difference }
    const range = Array.from(length, (_, index) => index + start)
    range.forEach(index => {
      newRow[index] = ''
    })

    newBoard[row] = newRow

    const newCursor = { ...cursor, forward: true }

    const field = { board: newBoard, cursor: newCursor }

    return field
  }

  return game
}

export default function useGame (): Game {
  const { game: controlled } = useControllerContext()

  const newCursor = NewCursor(controlled)
  const newGame = { ...controlled, cursor: newCursor }
  const { cursor, results } = LookupSearch(newGame)

  const initial = { ...newGame, cursor, results }

  const [game, setGame] = useState(initial)

  function effect (): () => void {
    function set (game: Game): Game {
      const { board: removedBoard, cursor: removedCursor } = remove(game)
      const removedGame = {
        ...game, board: removedBoard, cursor: removedCursor
      }

      const { cursor, results } = NextSearch(removedGame)
      const newGame = { ...removedGame, cursor, results }

      return newGame
    }

    function tick (): void {
      setGame?.(set)
    }

    const delay = interpret({
      understanding: game.cursor.understanding,
      is: 1000,
      not: 0,
      empty: 0,
      already: 100
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
