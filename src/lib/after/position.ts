import { Board, Row } from '../../types'

import letterAfter from '../letter/after'
import after from '.'

interface Position {
  x: number
  y: number
}

export default function positionAfter ({ board, row }: {
  board: Board
  row: number
}): Position | null {
  const next = row + 1

  let x
  function isSafe (row: Row): boolean {
    const found = letterAfter({ row, start: 0 })

    if (found != null) {
      x = found

      return true
    }

    return false
  }

  const y = after<Row>({ array: board, start: next, finder: isSafe })

  if (y == null) {
    return null
  }

  if (x == null) {
    throw new Error('Invalid x')
  }

  return { x, y }
}
