import { Board, Position } from '../../types'

import validReverse from './valid'

export default function nextReverse ({ board, position }: {
  board: Board
  position: Position
}): number {
  const { x, y } = position
  const row = board[y]

  const reversed = validReverse({ row, x })

  return reversed
}
