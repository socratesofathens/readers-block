import { Brick, Position } from '../../types'

import vectorAdd from './add'
import vectorFlip from './flip'
import vectorSubtract from './subtract'

export default function vectorRotate ({ position, center, rotation }: {
  position: Position
  center: Brick
  rotation: Position
}): Position {
  if (center.position == null) {
    throw new Error('Missing position')
  }

  const old = vectorSubtract({ a: position, b: center.position })

  const delta = vectorFlip({ a: old, b: rotation })

  const rotated = vectorAdd({ a: center.position, b: delta })

  return rotated
}
