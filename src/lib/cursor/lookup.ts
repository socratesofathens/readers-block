import { Cursor, Game } from '../../types'

import define from '../define'

export default function LookupCursor (
  { board, cursor, history }: Game
): Cursor {
  const row = board[cursor.row]
  const letters = row.slice(cursor.start, cursor.end + 1)

  const empty = letters.includes('')
  if (empty) {
    const emptyCursor = { ...cursor, understanding: { empty: true } }

    return emptyCursor
  }

  const word = letters.join('')

  const match = history.find(cursor => cursor.understanding?.word === word)
  const already = match != null
  if (already) {
    const understanding = { word, already }
    const alreadyCursor = { ...cursor, understanding }

    return alreadyCursor
  }

  const definition = define({ word })

  const understanding = {
    word,
    definition
  }

  const definedCursor = { ...cursor, understanding }

  return definedCursor
}
