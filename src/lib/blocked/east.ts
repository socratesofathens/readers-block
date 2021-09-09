import { Brick, Game } from '../../types'

export default function eastBlocked ({ brick, game }: {
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

  const x = brick.position.x + 1
  const cell = row[x]

  if (cell == null) {
    return true
  }

  if (cell.letter == null) {
    return false
  }

  if (cell.letter === '') {
    return false
  }

  return true
}
