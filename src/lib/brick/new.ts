import { Brick, Position } from '../../types'

import BRICK from '.'

export default function newBrick (options?: {
  letter?: string
  color?: string
  position?: Position
}): Brick {
  const brick = { ...BRICK, ...options }

  return brick
}
