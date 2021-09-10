import { Brick, Game } from '../../types'
import brickBlocked from './blocked'

export default function southBlocked ({ brick, game }: {
  brick: Brick
  game: Game
}): boolean {
  if (brick.position == null) {
    return false
  }

  const y = brick.position.y + 1

  const row = game.board[y]
  if (row == null) {
    return true
  }

  const cell = row[brick.position.x]

  const blocked = brickBlocked(cell)

  return blocked
}
