import { Game } from '../types'

import interpret from './interpret'

export default function createDelay ({ game }: {
  game: Game
}): number {
  const unblocked = game.block == null
  if (unblocked) {
    const delay = interpret({
      understanding: game.cursor.understanding,
      is: 0,
      not: 0,
      already: 0,
      empty: 20000
    })

    return delay
  }

  return 200
}
