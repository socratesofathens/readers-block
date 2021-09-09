import { Game } from '../../types'
import westBlock from '../block/west'
import westBlocked from '../blocked/west'

export default function westGame (game: Game): Game {
  if (game.block == null) {
    return game
  }

  const isBlocked = game
    .block
    .bricks
    .some(brick => westBlocked({ brick, game }))

  if (isBlocked) {
    return game
  }

  const block = westBlock({ game })
  const moved = { ...game, block }

  return moved
}
