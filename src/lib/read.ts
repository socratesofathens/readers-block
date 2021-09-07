import { Board, Cursor, Game } from '../types'
import BRICK from './brick'
import cursorColumn from './cursor/column'

interface Field {
  board: Board
  cursor: Cursor
}

export default function read (game: Game): Field {
  const notDefined = game.cursor.understanding.definition == null
  if (notDefined) return game

  const reversed = [...game.board].reverse()
  const board = reversed.map((row, reversedIndex) => {
    const rowIndex = game.board.length - reversedIndex - 1
    const above = rowIndex <= game.cursor.row
    if (above) {
      const fallenRow = row.map((brick, columnIndex) => {
        const column = cursorColumn({
          cursor: game.cursor, column: columnIndex
        })
        if (!column) return brick

        const aboveIndex = rowIndex - 1
        const aboveRow = game.board[aboveIndex]
        if (aboveRow == null) {
          return BRICK
        }

        const aboveLetter = aboveRow[columnIndex]

        return aboveLetter
      })

      return fallenRow
    }

    return row
  })
  board.reverse()

  const cursor = { ...game.cursor, forward: true }
  const field = { board, cursor }

  return field
}
