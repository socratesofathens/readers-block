import { useContext } from 'react'

import fieldContext from '../context/field'
import readingContext from '../context/reading'

import Square from '../view/Square'

export default function Block (
  { rowIndex, columnIndex }: {
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const field = useContext(fieldContext)
  const reading = useContext(readingContext)

  const readingRow = reading.row === rowIndex
  const readingColumn = readingRow && reading.start <= columnIndex
  const isReading = readingColumn && reading.end >= columnIndex

  const row = field.rows[rowIndex]
  const letter = row[columnIndex]

  return (
    <Square
      isReading={isReading}
      definition={reading.definition}
      letter={letter}
    />
  )
}
