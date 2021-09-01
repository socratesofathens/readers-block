import { Board, Row } from '../../types'

import BOARD_SIZE from '../board/size'

import letter from './letter'
import after from '.'

function isNatural (row: Row): boolean {
  const { natural } = letter({ row, start: 0 })

  return natural
}

export default function rowAfter ({ board, row }: {
  board: Board
  row: number
}): number {
  const next = row + 1
  const done = next >= BOARD_SIZE.height
  const { found, natural } = after<Row>({
    array: board, start: next, finder: isNatural
  })

  const unfound = done || !natural

  if (unfound) {
    const first = rowAfter({ board, row: -1 })

    return first
  }

  return found
}
