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
    const newRow = row.map((brick, columnIndex) => {
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

        return { ...brick, color }
      }

      return brick
    })

    return newRow
  })

  const movedHistory = [...movedGame.history, cursor]
  const notDefined = cursor.understanding.definition == null

  const words = notDefined
    ? movedGame.words
    : [...movedGame.words, cursor]

  const history = notDefined
    ? movedHistory
    : movedHistory.filter(cursor => cursor.understanding.definition)

  const newGame = { ...movedGame, board, cursor, history, words }

  return newGame
}
