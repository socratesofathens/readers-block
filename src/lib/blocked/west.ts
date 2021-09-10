import { Brick, Game } from '../../types'
import brickBlocked from './brick'

export default function westBlocked ({ brick, game }: {
  brick: Brick
  game: Game
}): boolean {
  if (brick.position == null) {
    return false
  }

  const row = game.board[brick.position.y]
  if (row == null) {
    return true
  }

  const x = brick.position.x - 1
  const cell = row[x]

  const blocked = brickBlocked(cell)

  return blocked
}
