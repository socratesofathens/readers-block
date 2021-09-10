import { Game } from '../../types'
import positionAfter from '../after/position'
import CURSOR from '../cursor'
import lookupCursor from '../cursor/lookup'
import validReverse from '../reverse/valid'

export default function blockedGame (game: Game): Game {
  const board = JSON.parse(JSON.stringify(game.board))
  game.block?.bricks.forEach(brick => {
    if (brick.position != null) {
      const row = board[brick.position.y]
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
  const history = [...blockedGame.history, cursor]

  const notDefined = cursor.understanding.definition == null

  const words = notDefined
    ? blockedGame.words
    : [...blockedGame.words, cursor]

  return { ...blockedGame, cursor, history, words }
}
