import { Brick } from '../../types'

import moveBrick from '../move/brick'

export default function eastBrick (brick: Brick): Brick {
  const moved = moveBrick({ brick, x: 1 })

  return moved
}
