import { Blocker, Game } from '../../types'

export default function blockBlocked ({ game, blocker }: {
  game: Game
  blocker: Blocker
}): boolean {
  if (game.block == null) {
    throw new Error('Missing block')
  }

  const blocked = game
    .block
    .bricks
    .some(brick => blocker({ brick, game }))

  return blocked
}
