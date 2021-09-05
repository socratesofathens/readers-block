import { Board, Row } from '../../types'
import letterBlock from '../block/letter'

import BOARD_SIZE from './size'

export default function NewBoard (): Board {
  function Row (): Row {
    const row = Array.from({ length: BOARD_SIZE.width }, letterBlock)

    return row
  }

  const board = Array.from({ length: BOARD_SIZE.height }, Row)

  return board
}
