import Cell from '../styles/Cell'

import { Definition } from '../types'

export default function Square (
  { letter, isReading, definition }: {
    letter: string
    isReading: boolean
    definition: Definition
  }
): JSX.Element {
  return (
    <Cell
      isReading={isReading}
      definition={definition}
      title='x'
    >
      {letter}
    </Cell>
  )
}
