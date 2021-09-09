import { Position } from '../../types'

import move from '.'

export default function moveY ({ position, y }: {
  position: Position
  y?: number
}): number {
  const moved = move({ position, key: 'y', value: y })

  return moved
}
