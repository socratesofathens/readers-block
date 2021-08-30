import Cell from '../styles/Cell'

import { Reading } from '../types'

export default function Block (
  { letter, isReading, reading }: {
    letter: string
    isReading: boolean
    reading: Reading
  }
): JSX.Element {
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
