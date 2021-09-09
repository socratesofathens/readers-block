import { Brick } from '../../types'
import moveX from './x'
import moveY from './y'

export default function moveBrick ({ brick, x, y }: {
  brick: Brick
  x?: number
  y?: number
}): Brick {
  if (brick.position == null) {
    return brick
  }

  const stay = x == null && y == null
  if (stay) {
    return brick
  }

  const movedX = moveX({ position: brick.position, x })
  const movedY = moveY({ position: brick.position, y })

  const position = { x: movedX, y: movedY }

  const moved = { ...brick, position }

  return moved
}
