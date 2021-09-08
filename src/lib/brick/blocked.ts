import { Brick, Game } from '../../types'

export default function brickBlocked ({ brick, game }: {
  brick: Brick
  game: Game
}): boolean {
  if (brick == null || brick.position == null) {
    return false
  }

  const y = brick.position.y + 1

  const row = game.board[y]
  if (row == null) {
    return true
  }

  const cell = row[brick.position.x]

  return cell.letter != null && cell.letter !== ''
}
