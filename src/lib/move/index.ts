import { Position } from '../../types'

import { BOARD_HEIGHT, BOARD_WIDTH } from '../board/size'

export default function move ({ position, key, value }: {
  position: Position
  key: 'x' | 'y'
  value?: number
}): number {
  const old = position[key]

  if (value == null || value === 0) {
    return old
  }

  const moved = old + value

  if (value > 0) {
    const LENGTH = key === 'x' ? BOARD_WIDTH : BOARD_HEIGHT
    const LAST = LENGTH - 1

    if (moved > LAST) {
      throw new Error('Moved too far')
    }
  }

  if (moved < 0) {
    throw new Error('Moved too close')
  }

  return moved
}
