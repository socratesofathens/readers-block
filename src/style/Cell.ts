import styled from 'styled-components'
import interpret from '../lib/interpret'

import { Reading } from '../types'

interface CellProps {
  readonly isReading: boolean
  readonly reading: Reading
}

function cellBackground ({ isReading, reading }: CellProps): string {
  if (isReading) {
    const background = interpret({
      understanding: reading.understanding,
      is: 'green',
      not: 'red',
      empty: 'lightgray',
      read: 'yellow'
    })

    return background
  }

  return 'white'
}

function cellColor ({ isReading, reading }: CellProps): string {
  if (isReading) {
    const color = interpret({
      understanding: reading.understanding,
      is: 'white',
      not: 'black',
      empty: 'black',
      read: 'black'
    })

    return color
  }

  return 'black'
}

export default styled.div<CellProps>`
  background: ${cellBackground};
  color: ${cellColor};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`
