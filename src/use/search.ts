import { useState, useEffect } from 'react'

import { useGameContext } from '../context/game'

import interpret from '../lib/interpret'

import NextCursor from '../lib/cursor/next'
import NewCursor from '../lib/cursor/new'

import { Board, Cursor, Results, Search } from '../types'

function remove ({ board, cursor }: {
  board: Board
  cursor: Cursor
}): Board {
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
    console.log('range test:', range)
    range.forEach(index => {
      newRow[index] = ''
    })

    newBoard[row] = newRow

    return newBoard
  }

  return board
}

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
      const { definition } = cursor.understanding
      console.log('definition test:', definition)
      const defined = cursor.understanding.definition != null
      console.log('defined test:', defined)
      const newBoard = remove({ board: game.board, cursor })

      game.setBoard(newBoard)

      const nextCursor = NextCursor({ board: newBoard, cursor, results })

      const newResults = addResult({ cursor: nextCursor, results })
      setResults(newResults)

      return nextCursor
    }

    function tick (): void {
      setCursor(set)
    }

    const delay = interpret({
      understanding: cursor.understanding,
      is: 1000,
      not: 100,
      empty: 100000,
      already: 10
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
