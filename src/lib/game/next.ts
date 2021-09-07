import { Game } from '../../types'
import positionAfter from '../after/position'
import newBlock from '../block/new'
import CURSOR from '../cursor'
import lookupCursor from '../cursor/lookup'
import moveCursor from '../cursor/move'
import cursorSearching from '../cursor/searching'
import interpret from '../interpret'
import letterReverse from '../letter/reverse'
import read from '../read'

export default function nextGame (game: Game): Game {
  if (game.block != null) {
    const dropped = game.block.bricks.map(brick => {
      if (brick.position == null) {
        return brick
      }

      const y = brick.position.y + 1
      const position = { ...brick.position, y }
      const dropped = { ...brick, position }

      return dropped
    })

    const blocked = dropped.some(brick => {
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
    })

    if (blocked) {
      const board = JSON.parse(JSON.stringify(game.board))
      game.block.bricks.forEach(brick => {
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
      const reversed = letterReverse({ row: afterRow, start: x })

      if (reversed == null) {
        throw new Error('Invalid reverse')
      }

      const positionedCursor = {
        ...CURSOR, row: y, start: x, end: reversed
      }

      const blockedGame = {
        ...game, board, cursor: positionedCursor, block: undefined
      }

      const cursor = lookupCursor(blockedGame)

      return { ...blockedGame, cursor }
    }

    const block = { ...game.block, bricks: dropped }
    const droppedGame = { ...game, block }

    return droppedGame
  }

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

  if (cursor.invisible) {
    if (game.block == null) {
      const block = newBlock()

      const newGame = { ...movedGame, board, cursor, history, words, block }

      return newGame
    }
  }

  const newGame = { ...movedGame, board, cursor, history, words }

  return newGame
}
