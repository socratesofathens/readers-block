import styled from 'styled-components'

import { Definition } from '../types'

interface CellProps {
  readonly isReading: boolean
  readonly definition: Definition
  readonly title: Definition
}

function cellBackground ({ isReading, definition }: CellProps): string {
  if (isReading) {
    if (definition == null) return 'blue'

    return 'green'
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
