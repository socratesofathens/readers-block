import CURSOR from '.'

import { Cursor, Game } from '../../types'
import positionAfter from '../after/position'
import letterReverse from '../letter/reverse'

export default function NewCursor ({ board }: Game): Cursor {
  const position = positionAfter({ board, row: -1 })
  if (position == null) {
    return CURSOR
  }

  const { x: start, y } = position
  const row = board[y]
  const end = letterReverse({ row, start })

  if (end == null) {
    const singleCursor = {
      ...CURSOR, row: y, start, end: start, forward: false
    }

    return singleCursor
  }

  const rangeCursor = { ...CURSOR, row: y, start, end: end, forward: false }

  return rangeCursor
}
