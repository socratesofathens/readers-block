import { Brick, Game } from '../../types'
import droppedBrick from '../brick/dropped'

export default function droppedBricks ({ game }: {
  game: Game
}): Brick[] {
  if (game.block == null) {
    throw new Error('Game has no block')
  }

  const dropped = game.block.bricks.map(droppedBrick)

  return dropped
}
