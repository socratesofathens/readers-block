import cursorSearching from '../lib/cursor/searching'
import interpret from '../lib/interpret'
import CellStyle from '../style/Cell'

import { Board, Cursor, Results } from '../types'

export default function CellView (
  { board, cursor, history, rowIndex, columnIndex }: {
    board: Board
    cursor: Cursor
    history: Results
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const row = board[rowIndex]
  const brick = row[columnIndex]

  const searching = cursorSearching({
    cursor, column: columnIndex, row: rowIndex
  })

  if (searching) {
    const color = interpret({
      understanding: cursor.understanding,
      is: 'green',
      not: 'red',
      already: 'yellow',
      empty: 'lightgray'
    })

    return (
      <CellStyle
        color={color}
        title={cursor.understanding?.definition}
      >
        {brick.letter}
      </CellStyle>
    )
  }

  const reversed = [...history].reverse()
  const result = reversed.find(cursor => {
    const searching = cursorSearching({
      cursor, column: columnIndex, row: rowIndex
    })

    return searching
  })

  if (result == null) {
    return (
      <CellStyle>
        {brick.letter}
      </CellStyle>
    )
  }

  const title = searching
    ? result?.understanding.definition
    : undefined

  return (
    <CellStyle
      color={brick.color}
      title={title}
    >
      {brick.letter}
    </CellStyle>
  )
}
