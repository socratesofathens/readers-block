import { Board, Cursor } from '../../types'

import BOARD_SIZE from '../board/size'

import letterAfter from '../after/letter'
import rowAfter from '../after/row'

import CURSOR from '.'

export default function move (
  { board, cursor }: { board: Board, cursor: Cursor }
): Cursor {
  const nextRowIndex = rowAfter({ board, row: cursor.row })
  const nextRow = board[nextRowIndex]
  const { found } = letterAfter({ row: nextRow, start: 0 })
  const nextRowCursor = {
    ...CURSOR, start: found, end: found, row: nextRowIndex
  }

  const nextStart = cursor.start + 1

  const row = board[cursor.row]
  const letters = row.slice(cursor.start, cursor.end + 1)
  const empty = letters.includes('')
  if (empty) {
    const { found, natural } = letterAfter({ row: row, start: nextStart })

    if (!natural) {
      return nextRowCursor
    }

    const safeCursor = {
      ...cursor,
      start: found,
      end: found,
      understanding: { empty }
    }

    return safeCursor
  }

  const nextEnd = cursor.end + 1
  const endOver = nextEnd >= BOARD_SIZE.width

  if (endOver) {
    const startOver = nextStart >= BOARD_SIZE.width

    if (startOver) {
      return nextRowCursor
    }

    const nextStartCursor = { ...cursor, start: nextStart, end: nextStart }

    return nextStartCursor
  }

  const nextEndCursor = { ...cursor, end: nextEnd }

  return nextEndCursor
}
