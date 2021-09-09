import { Game } from '../../types'

import eastBlock from '../block/east'
import eastBlocked from '../blocked/east'

import moveGame from '../move/game'

export default function eastGame (game: Game): Game {
  const west = moveGame({ game, mover: eastBlock, blocker: eastBlocked })

  return west
}
