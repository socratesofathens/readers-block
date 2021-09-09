import { Block, Game } from '../../types'

import westBrick from '../brick/west'
import moveBlock from '../move/block'

export default function westBlock ({ game }: {
  game: Game
}): Block {
  const block = moveBlock({ game, mover: westBrick })

  return block
}
