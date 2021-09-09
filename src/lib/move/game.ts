import { Block, Blocker, Game, Gamer } from '../../types'

import blockBlocked from '../block/blocked'

import is from '../is'

export default function moveGame ({
  game, mover, blocker, spawner = is
}: {
  game: Game
  mover: ({ game }: { game: Game }) => Block
  blocker: Blocker
  spawner?: Gamer
}): Game {
  if (game.block == null) {
    return game
  }

  const isBlocked = blockBlocked({ game, blocker })

  if (isBlocked) {
    // TODO block to spawn
    const blocked = spawner(game)

    return blocked
  }

  const block = mover({ game })
  const moved = { ...game, block }

  return moved
}
