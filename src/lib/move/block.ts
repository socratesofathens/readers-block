import { Block, Brick, Game } from '../../types'

import BLOCK from '.'

export default function moveBlock ({ game, mover }: {
  game: Game
  mover: (brick: Brick) => Brick
}): Block {
  if (game.block == null) {
    throw new Error('Game has no block')
  }

  const bricks = game.block.bricks.map(mover)

  const block = { ...BLOCK, ...game.block, bricks }

  return block
}
