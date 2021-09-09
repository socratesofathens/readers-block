import { Position } from '../../types'

import move from '.'

export default function moveX ({ position, x }: {
  position: Position
  x?: number
}): number {
  const moved = move({ position, key: 'x', value: x })

  return moved
}
