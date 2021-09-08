import { Brick } from '../../types'

export default function droppedBrick (brick: Brick): Brick {
  if (brick.position == null) {
    return brick
  }

  const y = brick.position.y + 1
  const position = { ...brick.position, y }
  const dropped = { ...brick, position }

  return dropped
}
