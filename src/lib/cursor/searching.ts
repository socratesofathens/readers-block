import { Cursor } from '../../types'
import cursorColumn from './column'

export default function cursorSearching ({ cursor, row, column }: {
  cursor: Cursor
  row: number
  column: number
}): boolean {
  const x = cursorColumn({ cursor, column })
  const searching = x && cursor.row === row

  return searching
}
