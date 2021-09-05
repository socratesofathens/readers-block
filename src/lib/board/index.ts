import { Board, Row } from '../../types'

import NewBlock from '../block/new'

import BOARD_SIZE from './size'

function EmptyRow (): Row {
  const cells = Array.from({ length: BOARD_SIZE.width }, NewBlock)

  return cells
}

const BOARD: Board = Array.from({ length: BOARD_SIZE.height }, EmptyRow)

export default BOARD
