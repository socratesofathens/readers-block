import { Cursor } from '../../types'

export default function cursorColumn ({ cursor, column }: {
  cursor: Cursor
  column: number
}): boolean {
  const start = cursor.start <= column
  const end = start && cursor.end >= column

  return end
}
