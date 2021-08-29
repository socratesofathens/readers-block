import { useContext } from 'react'

import readerContext from '../context/reader'

import Cell from '../styles/Cell'

export default function Block (
  { letter, rowIndex, columnIndex }: {
    letter: string
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const reader = useContext(readerContext)

  const row = reader.row === rowIndex
  const start = row && reader.start <= columnIndex
  const reading = start && reader.end >= columnIndex

  return (
    <Cell reading={reading}>
      {letter}
    </Cell>
  )
}
