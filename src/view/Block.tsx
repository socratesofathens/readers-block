import Cell from '../styles/Cell'

import { Reading } from '../types'

export default function Block (
  { letter, isReading, reading }: {
    letter: string
    isReading: boolean
    reading: Reading
  }
): JSX.Element {
  return (
    <Cell
      isReading={isReading}
      reading={reading}
      title='x'
    >
      {letter}
    </Cell>
  )
}
