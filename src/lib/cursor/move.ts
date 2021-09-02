import { Board, Cursor } from '../../types'

import letterAfter from '../after/letter'
import rowAfter from '../after/row'

import CURSOR from '.'

function isSafe (letter: string): boolean {
  const full = letter !== ''
  const safe = full && letter != null

  return safe
}

export default function moveCursor (
  { board, cursor }: { board: Board, cursor: Cursor }
): Cursor {
  const row = board[cursor.row]

  const startLetter = row[cursor.start]
  const startSafe = isSafe(startLetter)

  const nextEnd = cursor.end + 1
  const nextEndLetter = row[nextEnd]
  const nextEndSafe = isSafe(nextEndLetter)

  const nextSafe = startSafe && nextEndSafe

  if (nextSafe) {
    const nextEndCursor = { ...cursor, end: nextEnd }

    return nextEndCursor
  }

  const nextStart = cursor.start + 1
  const { found, natural } = letterAfter({ row, start: nextStart })

  const isFound = found != null
  const safe = isFound && natural

  if (safe) {
    const nextStartCursor = { ...cursor, start: found, end: found }

    return nextStartCursor
  }

  const { x, y } = rowAfter({ board, row: cursor.row })
  const nextRowCursor = { ...CURSOR, row: x, start: y, end: y }

  return nextRowCursor
}
