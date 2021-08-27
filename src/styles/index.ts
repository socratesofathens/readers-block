import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(20, 1fr);
  width: 65vmin;
  height: 100vmin;
`

interface CellProps {
  readonly reading: boolean
}

export const Cell = styled.div<CellProps>`
  width: 5vmin;
  height: 5vmin;
  background: ${props => props.reading ? 'blue' : 'lightgray'};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`
