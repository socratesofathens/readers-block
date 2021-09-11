import { Game } from '../types'

import interpret from './interpret'

export default function createDelay ({ game }: {
  game: Game
}): number {
  const unblocked = game.block == null
  if (unblocked) {
    const delay = interpret({
      understanding: game.cursor.understanding,
      is: 250,
      not: 200,
      already: 100,
      empty: 0
    })

    return delay
  }

  return 1000
}
