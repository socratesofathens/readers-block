import { Board, Cursor } from '../../types'

import letterAfter from '../letter/after'
import letterReverse from '../letter/reverse'
import positionAfter from '../after/position'

export default function moveCursor (
  { board, cursor }: { board: Board, cursor: Cursor }
): Cursor {
  const row = board[cursor.row]

  const backward = !cursor.forward
  const starting = cursor.end <= cursor.start
  const complete = backward && starting
  if (complete) {
    cursor.forward = true
  }

  if (cursor.forward) {
    const nextStart = letterAfter({ row, start: cursor.start + 1 })

    if (nextStart == null) {
      const position = positionAfter({ board, row: cursor.row })

      const next = position == null
        ? positionAfter({ board, row: -1 })
        : position

      if (next == null) {
        return cursor
      }

      const { x, y } = next

      const afterRow = board[y]

      const reversed = letterReverse({ row: afterRow, start: x })

      if (reversed == null) {
        throw new Error('Invalid reverse')
      }

      const nextRowCursor = {
        row: y, start: x, end: reversed, forward: false, understanding: {}
      }

      return nextRowCursor
    }

    const nextEnd = letterReverse({ row, start: nextStart })

    if (nextEnd == null) {
      const nextStartCursor = {
        ...cursor, start: nextStart, end: nextStart, forward: false
      }

      return nextStartCursor
    }

    const nextEndCursor = {
      ...cursor, start: nextStart, end: nextEnd, forward: false
    }

    return nextEndCursor
  }

  const nextEnd = cursor.end - 1
  const nextCursor = { ...cursor, end: nextEnd }

  return nextCursor
}
