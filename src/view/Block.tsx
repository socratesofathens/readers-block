import Cell from '../style/Cell'

import { Field, Reading } from '../types'

export default function Block (
  { field, reading, rowIndex, columnIndex }: {
    field: Field
    reading: Reading
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const readingRow = reading.row === rowIndex
  const readingColumn = readingRow && reading.start <= columnIndex
  const isReading = readingColumn && reading.end >= columnIndex

  const row = field[rowIndex]
  const letter = row[columnIndex]
  const title = isReading
    ? reading.understanding?.definition
    : undefined

  return (
    <Cell
      isReading={isReading}
      reading={reading}
      title={title}
    >
      {letter}
    </Cell>
  )
}
