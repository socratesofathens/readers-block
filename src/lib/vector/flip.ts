import { Position } from '../../types'

import vectorMultiply from './multiply'

export default function vectorFlip ({ a, b }: {
  a: Position
  b: Position
}): Position {
  const flipped = { x: a.y, y: a.x }

  const multiplied = vectorMultiply({ a: flipped, b })

  return multiplied
}
