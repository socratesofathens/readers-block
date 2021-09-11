import { Game } from '../../types'
import createBlock from '../block/create'
import BRICK from '../brick'
import lookupCursor from '../cursor/lookup'
import moveCursor from '../cursor/move'
import cursorSearching from '../cursor/searching'
import interpret from '../interpret'
import read from '../read'
import southGame from './south'

export default function nextGame (game: Game): Game {
  if (game.block != null) {
    const south = southGame(game)

    return south
  }

  const { board: readBoard, cursor: readCursor } = read(game)
  const readGame = {
    ...game, board: readBoard, cursor: readCursor
  }

  const movedCursor = moveCursor(readGame)
  const movedGame = { ...readGame, cursor: movedCursor }

  const cursor = lookupCursor(movedGame)

  const board = movedGame.board.map((row, rowIndex) => {
    const coloredRow = row.map((brick, columnIndex) => {
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

    return coloredRow
  })

  const movedHistory = [...movedGame.history, cursor]
  const notDefined = cursor.understanding.definition == null

  const words = notDefined
    ? movedGame.words
    : [...movedGame.words, cursor]

  const history = notDefined
    ? movedHistory
    : movedHistory.filter(cursor => cursor.understanding.definition)

  if (cursor.invisible) {
    if (game.block == null) {
      const block = createBlock()

      let empty = true
      let clearBoard = [...game.board]
      while (empty) {
        const fullIndex = clearBoard.findIndex((row, index) => {
          const empty = row.some(cell => {
            const empty = cell.letter == null || cell.letter === ''

            return empty
          })

          return !empty
        })

        if (fullIndex > -1) {
          const clearerBoard = clearBoard.map((row, index) => {
            if (index <= fullIndex) {
              const above = clearBoard[index - 1]

              if (above == null) {
                const blankRow = Array.from({ length: row.length }, () => BRICK)

                return blankRow
              }

              return JSON.parse(JSON.stringify(above))
            }

            return row
          })

          clearBoard = clearerBoard
        } else {
          empty = false
        }
      }

      const blockGame = { ...movedGame, board: clearBoard, cursor, history, words, block }

      return blockGame
    }
  }

  const newGame = { ...movedGame, board, cursor, history, words }

  return newGame
}
