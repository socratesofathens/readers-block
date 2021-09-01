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
  const cursorRow = cursor.row === rowIndex
  const cursorColumn = cursorRow && cursor.start <= columnIndex
  const searching = cursorColumn && cursor.end >= columnIndex

  const title = searching
    ? cursor.understanding?.definition
    : undefined

  const row = board[rowIndex]
  const letter = row[columnIndex]

  return (
    <CellStyle
      searching={searching}
      cursor={cursor}
      title={title}
    >
      {letter}
    </CellStyle>
  )
}
