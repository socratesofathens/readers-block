import { Brick, Position } from '../../types'
import vectorRotate from '../vector/rotate'

type Rotator = (brick: Brick) => Position

export default function brickRotator ({ center, rotation }: {
  center: Brick
  rotation: Position
}): Rotator {
  function rotate (brick: Brick): Position {
    if (brick.position == null) {
      throw new Error('Missing position')
    }
    const position = vectorRotate({
      position: brick.position, center, rotation
    })

    return position
  }

  return rotate
}
