import { Board, Cursor } from '../../types'

import letterAfter from '../after/letter'
import rowAfter from '../after/row'

import CURSOR from '.'

export default function move (
  { board, cursor }: { board: Board, cursor: Cursor }
): Cursor {
  console.log('cursor test:', cursor)
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

  const unfound = found == null
  const safe = !unfound && natural

  if (safe) {
    const nextStartCursor = { ...cursor, start: found, end: found }

    return nextStartCursor
  }

  const { row: x, match } = rowAfter({ board, row: cursor.row })
  const nextRowCursor = { ...CURSOR, start: match, end: match, row: x }

  return nextRowCursor
}
