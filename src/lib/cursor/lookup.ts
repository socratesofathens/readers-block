import { Cursor, Game } from '../../types'

import define from '../define'

export default function lookupCursor (
  { board, cursor, results }: Game
): Cursor {
  const row = board[cursor.row]
  const letters = row.slice(cursor.start, cursor.end + 1)

  const empty = letters.includes('')
  if (empty) {
    const emptyCursor = { ...cursor, understanding: { empty: true } }

    return emptyCursor
  }

  const word = letters.join('')

  const match = results.find(result => result.understanding?.word === word)
  const already = match != null
  if (already) {
    const understanding = { word, already: true }
    const alreadyCursor = { ...cursor, understanding }

    return alreadyCursor
  }

  const definition = define({ word })

  const defined = {
    word,
    definition
  }

  const definedCursor = { ...cursor, understanding: defined }

  return definedCursor
}