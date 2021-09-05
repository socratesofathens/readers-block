import { Game } from '../../types'
import lookupCursor from '../cursor/lookup'
import moveCursor from '../cursor/move'
import cursorSearching from '../cursor/searching'
import interpret from '../interpret'
import read from '../read'

export default function nextGame (game: Game): Game {
  const { board: readBoard, cursor: readCursor } = read(game)
  const readGame = {
    ...game, board: readBoard, cursor: readCursor
  }

  const movedCursor = moveCursor(readGame)
  const movedGame = { ...readGame, cursor: movedCursor }

  const cursor = lookupCursor(movedGame)

  const board = movedGame.board.map((row, rowIndex) => {
    const newRow = row.map((block, columnIndex) => {
      const searching = cursorSearching({
        cursor, row: rowIndex, column: columnIndex
      })

      if (searching) {
        const color = interpret({
          understanding: cursor.understanding,
          is: 'lightgreen',
          not: 'lightcoral',
          already: 'lightyellow',
          empty: 'lightgray'
        })

        return { ...block, color }
      }

      return block
    })

    return newRow
  })

  const history = [...movedGame.history, cursor]

  const words = cursor.understanding.definition == null
    ? movedGame.words
    : [...movedGame.words, cursor]

  const newGame = { ...movedGame, board, cursor, history, words }

  return newGame
}
