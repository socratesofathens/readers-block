import { Brick } from '../../types'
import moveBrick from '../move/brick'

export default function southBrick (brick: Brick): Brick {
  const moved = moveBrick({ brick, y: 1 })

  return moved
}
