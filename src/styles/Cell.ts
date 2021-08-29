import styled from 'styled-components'

interface CellProps {
  readonly isReading: boolean
}

function cellBackground ({ isReading }: CellProps): string {
  if (isReading) return 'blue'

  return 'lightgray'
}

export default styled.div<CellProps>`
  width: 5vmin;
  height: 5vmin;
  background: ${cellBackground};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`
