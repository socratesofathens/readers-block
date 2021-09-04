import styled from 'styled-components'
import interpret from '../lib/interpret'

import { Cursor } from '../types'

interface CellProps {
  above: boolean
  searching: boolean
  cursor: Cursor
}

function cellBackground ({ above, searching, cursor }: CellProps): string {
  const defined = cursor.understanding.definition != null
  if (above && defined) {
    return 'lightgreen'
  }

  if (searching) {
    const background = interpret({
      understanding: cursor.understanding,
      is: 'green',
      not: 'red',
      empty: 'lightgray',
      already: 'yellow'
    })

    return background
  }

  return 'white'
}

function cellColor ({ searching, cursor }: CellProps): string {
  if (searching) {
    const color = interpret({
      understanding: cursor.understanding,
      is: 'white',
      not: 'black',
      empty: 'black',
      already: 'black'
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
