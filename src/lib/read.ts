import { Board, Cursor, Game } from '../types'

interface Field {
  board: Board
  cursor: Cursor
}

function isReading ({ cursor, index }: {
  cursor: Cursor
  index: number
}): boolean {
  const start = index >= cursor.start
  const reading = start && index <= cursor.end

  return reading
}

export default function read (game: Game): Field {
  const notDefined = game.cursor.understanding.definition == null
  if (notDefined) return game

  console.log('understanding test:', game.cursor.understanding)
  const reversed = [...game.board].reverse()
  const cleared = reversed.map((row, reversedIndex) => {
    console.log('row test:', JSON.parse(JSON.stringify(row)))
    console.log('reversedIndex test:', reversedIndex)
    console.log('game.board.length test:', game.board.length)
    const rowIndex = game.board.length - reversedIndex - 1
    console.log('rowIndex test:', rowIndex)
    console.log('row test:', game.cursor.row)
    const above = rowIndex <= game.cursor.row
    console.log('above test:', above)
    if (above) {
      const aboveIndex = rowIndex - 1
      console.log('aboveIndex test:', aboveIndex)

      const fallenRow = row.map((letter, index) => {
        const reading = isReading({ cursor: game.cursor, index })
        if (!reading) return letter

        const aboveRow = game.board[aboveIndex]
        console.log('aboveRow test:', aboveRow)

        if (aboveRow == null) {
          return ''
        }

        const aboveLetter = aboveRow[index]
        console.log('aboveLetter test:', aboveLetter)

        return aboveLetter
      })
      console.log('fallenRow test:', fallenRow)

      return fallenRow
    }

    return row
  })
  cleared.reverse()

  const cursor = { ...game.cursor, forward: true }
  const field = { board: cleared, cursor }

  return field
}
