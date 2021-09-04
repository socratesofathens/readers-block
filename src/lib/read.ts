import { Board, Cursor, Game } from '../types'

interface Field {
  board: Board
  cursor: Cursor
}

export default function read (game: Game): Field {
  const notDefined = game.cursor.understanding.definition == null
  if (notDefined) return game

  const reversed = [...game.board].reverse()
  const cleared = reversed.map((row, reverse) => {
    const index = game.board.length - reverse - 1
    const cursor = index === game.cursor.row
    if (cursor) {
      const cursorRow = row.map((letter, index) => {
        const start = index >= game.cursor.start
        const cursor = start && index <= game.cursor.end

        if (cursor) {
          return ''
        }

        return letter
      })

      return cursorRow
    }

    const above = index < game.cursor.row
    if (above) {
      const aboveRow = row.map((letter, index) => {
        const start = index >= game.cursor.start
        const cursor = start && index <= game.cursor.end

        const aboveIndex = reverse + 1
        const onBoard = aboveIndex < reversed.length
        const falling = onBoard && cursor
        if (falling) {
          const aboveRow = reversed[aboveIndex]
          const aboveLetter = aboveRow[index]

          return aboveLetter
        }

        if (cursor) {
          return ''
        }

        return letter
      })

      return aboveRow
    }

    return row
  })
  const board = cleared.reverse()

  const cursor = { ...game.cursor, forward: true }
  const field = { board, cursor }

  return field
}
