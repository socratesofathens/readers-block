import { Block, Game } from '../../types'

import southBrick from '../brick/south'
import moveBlock from '../move/block'

export default function southBlock ({ game }: {
  game: Game
}): Block {
  const block = moveBlock({ game, mover: southBrick })

  return block
}
