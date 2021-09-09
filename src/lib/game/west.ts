import { Game } from '../../types'

import westBlock from '../block/west'

import westBlocked from '../blocked/west'

import moveGame from '../move/game'

export default function westGame (game: Game): Game {
  const west = moveGame({ game, mover: westBlock, blocker: westBlocked })

  return west
}
