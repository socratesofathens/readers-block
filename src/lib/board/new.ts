import { Board } from '../../types'

import Letter from '../Letter'

import BOARD_SIZE from './size'

export default function NewField (
  options?: { writer?: () => string }
): Board {
  const callback = options == null || options.writer == null
    ? Letter
    : options.writer

  function Row (): string[] {
    const cells = Array.from({ length: BOARD_SIZE.width }, callback)

    return cells
  }

  const board = Array.from({ length: BOARD_SIZE.height }, Row)

  return board
}
