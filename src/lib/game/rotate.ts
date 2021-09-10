import { Game, Position } from '../../types'

import brickRotator from '../brick/rotator'

export default function rotateGame ({ game, rotation }: {
  game: Game
  rotation: Position
}): Game {
  if (game.block == null) {
    return game
  }

  const center = game.block.bricks[2]

  const rotator = brickRotator({ center, rotation })
  const positions = game.block.bricks.map(rotator)
  const bricks = game.block.bricks.map((brick, index) => {
    const position = positions[index]
    const positioned = { ...brick, position }

    return positioned
  })

  const block = { ...game.block, bricks }
  const rotated = { ...game, block }

  return rotated
}
