import { Game } from '../../types'
import eastBlock from '../block/east'
import eastBlocked from '../blocked/east'

export default function eastGame (game: Game): Game {
  if (game.block == null) {
    return game
  }

  const isBlocked = game
    .block
    .bricks
    .some(brick => eastBlocked({ brick, game }))

  if (isBlocked) {
    return game
  }

  const block = eastBlock({ game })

  const west = { ...game, block }

  return west
}
