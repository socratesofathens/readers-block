import { Game } from '../../types'
import BLOCK from '../block'
import droppedBricks from '../block/dropped'
import brickBlocked from '../brick/blocked'
import blockedGame from './blocked'

export default function dropGame (game: Game): Game {
  if (game.block == null) {
    return game
  }

  const dropped = droppedBricks({ game })

  const isBlocked = dropped.some(brick => brickBlocked({ brick, game }))

  if (isBlocked) {
    const blocked = blockedGame({ game })

    return blocked
  }

  const block = { ...BLOCK, ...game.block, bricks: dropped }
  const droppedGame = { ...game, block }

  return droppedGame
}
