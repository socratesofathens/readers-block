import { Cursor, Game } from '../../types'

import define from '../define'

export default function lookupCursor (
  { board, cursor, words }: Game
): Cursor {
  const row = board[cursor.row]
  const bricks = row.slice(cursor.start, cursor.end + 1)
  const letters = bricks.map(brick => brick.letter)

  const empty = letters.includes('')
  if (empty) {
    const emptyCursor = {
      ...cursor, understanding: { empty: true }, invisible: true
    }

    return emptyCursor
  }

  const word = letters.join('')

  const match = words.find(cursor => cursor.understanding?.word === word)
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
