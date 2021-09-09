import { Game } from '../../types'

import southGame from './south'

export default function dropGame (game: Game): Game {
  let unblocked = true
  let drop = game
  let escape = 0

  while (unblocked && escape < 100) {
    drop = southGame(drop)

    unblocked = drop.cursor.invisible

    escape++
  }

  return drop
}
