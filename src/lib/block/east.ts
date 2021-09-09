import { Block, Game } from '../../types'

import eastBrick from '../brick/east'

import moveBlock from '../move/block'

export default function eastBlock ({ game }: {
  game: Game
}): Block {
  const block = moveBlock({ game, mover: eastBrick })

  return block
}
