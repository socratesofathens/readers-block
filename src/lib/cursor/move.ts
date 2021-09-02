import { Board, Cursor } from '../../types'

import letterAfter from '../after/letter'
import rowAfter from '../after/row'

import CURSOR from '.'

export default function moveCursor (
  { board, cursor }: { board: Board, cursor: Cursor }
): Cursor {
  const row = board[cursor.row]
  const nextIndex = cursor.end + 1
  const nextLetter = row[nextIndex]

  const isFull = nextLetter !== ''
  const isLetter = isFull && nextLetter != null

  if (isLetter) {
    const nextIndexCursor = { ...cursor, end: nextIndex }

    return nextIndexCursor
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
