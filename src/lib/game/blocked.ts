import { Game } from '../../types'
import positionAfter from '../after/position'
import CURSOR from '../cursor'
import lookupCursor from '../cursor/lookup'
import validReverse from '../reverse/valid'

export default function blockedGame ({ game }: {
  game: Game
}): Game {
  const board = JSON.parse(JSON.stringify(game.board))
  game.block?.bricks.forEach(brick => {
    if (brick.position != null) {
      const y = brick.position.y + 1
      const row = board[y]
      const cell = row[brick.position.x]

      cell.letter = brick.letter
    }
  })

  const position = positionAfter({ board, row: -1 })

  if (position == null) {
    throw new Error('Invalid position')
  }

  const { x, y } = position
  const afterRow = board[y]
  const reversed = validReverse({ row: afterRow, x })

  const positionedCursor = {
    ...CURSOR, row: y, start: x, end: reversed
  }

  const blockedGame = {
    ...game, board, cursor: positionedCursor, block: undefined
  }

  const cursor = lookupCursor(blockedGame)

  return { ...blockedGame, cursor }
}
