import { Board, Row } from '../../types'
import BOARD_SIZE from './size'

function Empty (): string {
  return ''
}

function EmptyRow (): Row {
  const cells = Array.from({ length: BOARD_SIZE.width }, Empty)

  return cells
}

const BOARD: Board = Array.from({ length: BOARD_SIZE.height }, EmptyRow)

export default BOARD
