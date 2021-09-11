import { Board, Row } from '../../types'
import boardBrick from '../brick/board'

import BOARD_SIZE from './size'

export default function createBoard (): Board {
  function Row (): Row {
    const row = Array.from({ length: BOARD_SIZE.width }, boardBrick)

    return row
  }

  const board = Array.from({ length: BOARD_SIZE.height }, Row)

  return board
}
