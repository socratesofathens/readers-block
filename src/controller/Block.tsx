import { useContext } from 'react'

import readingContext from '../context/reading'

import Cell from '../styles/Cell'

export default function Block (
  { letter, rowIndex, columnIndex }: {
    letter: string
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const reading = useContext(readingContext)

  const row = reading.row === rowIndex
  const start = row && reading.start <= columnIndex
  const isReading = start && reading.end >= columnIndex

  return (
    <Cell isReading={isReading}>
      {letter}
    </Cell>
  )
}
