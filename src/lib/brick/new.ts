import { Brick } from '../../types'

import BRICK from '.'

export default function NewBrick (options?: {
  letter?: string
  color?: string
}): Brick {
  const brick = { ...BRICK, ...options }

  return brick
}
