import { useState, useEffect } from 'react'

import { useGameContext } from '../context/game'

import interpret from '../lib/interpret'

import NextCursor from '../lib/cursor/next'
import NewCursor from '../lib/cursor/new'

import { Cursor, Results, Search } from '../types'

function addResult (
  { cursor, results }: Search
): Results {
  if (cursor.understanding?.definition != null) {
    const newResults = [...results, cursor]

    return newResults
  }

  return results
}

export default function useSearch (): Search {
  const game = useGameContext()

  const newCursor = NewCursor(game)
  const initialResults = addResult({ cursor: newCursor, results: [] })

  const [cursor, setCursor] = useState<Cursor>(newCursor)
  const [results, setResults] = useState<Results>(initialResults)

  function effect (): () => void {
    function set (cursor: Cursor): Cursor {
      const defined = cursor.understanding.definition != null
      if (defined) {
        const { row, start, end } = cursor

        const newBoard = [...game.board]
        const array = newBoard[row]

        const difference = end - start
        const length = { length: difference }
        const range = Array.from(length, (_, index) => index + start)

        range.forEach(index => array[index] === '')

        game.setBoard(newBoard)
      }

      const nextCursor = NextCursor({ board: game.board, cursor, results })

      const newResults = addResult({ cursor: nextCursor, results })
      setResults(newResults)

      return nextCursor
    }

    function tick (): void {
      setCursor(set)
    }

    const delay = interpret({
      understanding: cursor.understanding,
      is: 0,
      not: 0,
      empty: 100000,
      already: 0
    })

    const interval = setInterval(tick, delay)

    function clear (): void {
      return clearInterval(interval)
    }

    return clear
  }

  useEffect(effect, [game, cursor.understanding, results])

  return { cursor, results }
}
