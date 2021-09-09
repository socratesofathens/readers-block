import { Game } from '../../types'
import southBlock from '../block/south'
import southBlocked from '../blocked/south'
import moveGame from '../move/game'
import blockedGame from './blocked'

export default function southGame (game: Game): Game {
  const south = moveGame({
    game, mover: southBlock, blocker: southBlocked, spawner: blockedGame
  })

  return south
}
