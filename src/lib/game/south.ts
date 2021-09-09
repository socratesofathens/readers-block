import { Game } from '../../types'
import southBlock from '../block/south'
import southBlocked from '../blocked/south'
import moveGame from '../move/game'

export default function southGame (game: Game): Game {
  const south = moveGame({ game, mover: southBlock, blocker: southBlocked })

  return south
}
