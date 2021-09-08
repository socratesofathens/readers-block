import { Board, Cursor } from '../../types'

import letterAfter from '../letter/after'
import letterReverse from '../letter/reverse'
import positionAfter from '../after/position'
import createCursor from './create'
import CURSOR from '.'
import validReverse from '../reverse/valid'

export default function moveCursor (
  { board, cursor }: { board: Board, cursor: Cursor }
): Cursor {
  const defined = cursor.understanding.definition != null
  if (defined) {
    const createdCursor = createCursor({ board })

    return createdCursor
  }

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

      if (position == null) {
        const position = positionAfter({ board, row: -1 })

        if (position == null) {
          return CURSOR
        }

        const { x, y } = position
        const afterRow = board[y]
        const reversed = validReverse({ row: afterRow, x })

        return { ...CURSOR, row: y, start: x, end: reversed, invisible: true }
      }

      const { x, y } = position
      const afterRow = board[y]
      const reversed = validReverse({ row: afterRow, x })

      const nextRowCursor = {
        ...cursor,
        row: y,
        start: x,
        end: reversed,
        forward: false,
        understanding: {}
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
