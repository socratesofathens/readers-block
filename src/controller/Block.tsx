import { useContext } from 'react'

import fieldContext from '../context/field'
import readContext from '../context/read'

import BlockView from '../view/Block'

export default function Block (
  { rowIndex, columnIndex }: {
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const field = useContext(fieldContext)
  const { reading } = useContext(readContext)

  const readingRow = reading.row === rowIndex
  const readingColumn = readingRow && reading.start <= columnIndex
  const isReading = readingColumn && reading.end >= columnIndex

  const row = field.rows[rowIndex]
  const letter = row[columnIndex]

  return (
    <BlockView
      isReading={isReading}
      reading={reading}
      letter={letter}
    />
  )
}
