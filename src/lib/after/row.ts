import { Board, Row } from '../../types'

import BOARD_SIZE from '../board/size'

import letter from './letter'
import after from '.'

interface Position {
  x: number
  y: number
}

export default function cellAfter ({ board, row }: {
  board: Board
  row: number
}): Position {
  const next = row + 1
  const done = next >= BOARD_SIZE.height

  let y = -1

  function isNatural (row: Row): boolean {
    const { found, natural } = letter({ row, start: 0 })

    if (natural) {
      y = found
    }

    return natural
  }

  const { found, natural } = after<Row>({
    array: board, start: next, finder: isNatural
  })

  const unfound = done || !natural

  if (unfound) {
    const first = cellAfter({ board, row: -1 })

    return first
  }

  return { x: found, y }
}
