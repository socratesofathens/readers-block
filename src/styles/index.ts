import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(20, 1fr);
  width: 65vmin;
  height: 100vmin;
`

export const Cell = styled.div`
  width: 5vmin;
  height: 5vmin;
  background: lightgray;
  border: 1px solid black;
`
