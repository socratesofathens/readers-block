import styled from 'styled-components'
import interpret from '../lib/define/interpret'

import { Reading } from '../types'

interface CellProps {
  readonly isReading: boolean
  readonly reading: Reading
}

function cellBackground ({ isReading, reading }: CellProps): string {
  if (isReading) {
    const color = interpret({
      definition: reading.definition, is: 'green', not: 'red', empty: 'blue'
    })

    return color
  }

  return 'lightgray'
}

export default styled.div<CellProps>`
  background: ${cellBackground};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`
