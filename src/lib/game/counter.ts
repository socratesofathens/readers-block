import { Game, Position } from '../../types'

export default function counterGame (game: Game): Game {
  if (game.block == null) {
    return game
  }

  const center = game.block.bricks[2]

  function counter (position?: Position): Position {
    if (position == null) {
      throw new Error('Missing position')
    }

    if (center.position == null) {
      throw new Error('Missing center')
    }

    const oldX = position.x - center.position.x
    const oldY = position.y - center.position.y

    const dX = oldY
    const dY = -oldX

    const x = center.position.x + dX
    const y = center.position.y + dY

    return { x, y }
  }

  const bricks = game.block.bricks.map(brick => {
    const position = counter(brick.position)

    const moved = { ...brick, position }

    return moved
  })

  const block = { ...game.block, bricks }
  const countered = { ...game, block }

  return countered
}
