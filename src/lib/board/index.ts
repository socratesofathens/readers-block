import { Board, Row } from '../../types'

import createBrick from '../brick/create'

import BOARD_SIZE from './size'

function EmptyRow (): Row {
  const cells = Array.from({ length: BOARD_SIZE.width }, createBrick)

  return cells
}

const BOARD: Board = Array.from({ length: BOARD_SIZE.height }, EmptyRow)

export default BOARD
