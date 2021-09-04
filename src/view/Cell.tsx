import CellStyle from '../style/Cell'

import { Board, Cursor } from '../types'

export default function CellView (
  { board, cursor, rowIndex, columnIndex }: {
    board: Board
    cursor: Cursor
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const cursorStart = cursor.start <= columnIndex
  const cursorEnd = cursorStart && cursor.end >= columnIndex
  const searching = cursorEnd && cursor.row === rowIndex
  const above = cursorEnd && cursor.row > rowIndex

  const title = searching
    ? cursor.understanding?.definition
    : undefined

  const row = board[rowIndex]
  const letter = row[columnIndex]

  return (
    <CellStyle
      searching={searching}
      above={above}
      cursor={cursor}
      title={title}
    >
      {letter}
    </CellStyle>
  )
}
