import { Block, Blocker, Game } from '../../types'
import blockedGame from '../game/blocked'

export default function moveGame ({ game, mover, blocker }: {
  game: Game
  mover: ({ game }: { game: Game }) => Block
  blocker: Blocker
}): Game {
  if (game.block == null) {
    return game
  }

  const isBlocked = game
    .block
    .bricks
    .some(brick => blocker({ brick, game }))

  if (isBlocked) {
    const blocked = blockedGame({ game })

    return blocked
  }

  const block = mover({ game })
  const moved = { ...game, block }

  return moved
}
