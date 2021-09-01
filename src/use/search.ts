import { useState, useEffect, useContext } from 'react'

import boardContext from '../context/board'

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
  const board = useContext(boardContext)

  const newCursor = NewCursor({ board })
  const initialResults = addResult({ cursor: newCursor, results: [] })

  const [cursor, setCursor] = useState<Cursor>(newCursor)
  const [results, setResults] = useState<Results>(initialResults)

  function effect (): () => void {
    function set (cursor: Cursor): Cursor {
      const next = NextCursor({ board, cursor, results })

      const newResults = addResult({ cursor: next, results })
      setResults(newResults)

      return next
    }

    function tick (): void {
      setCursor(set)
    }

    const delay = interpret({
      understanding: cursor.understanding,
      is: 1000,
      not: 100,
      empty: 0,
      already: 10
    })

    const interval = setInterval(tick, delay)

    function clear (): void {
      return clearInterval(interval)
    }

    return clear
  }

  useEffect(effect, [board, cursor.understanding, results])

  return { cursor, results }
}
