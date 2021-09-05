import styled from 'styled-components'

interface CellProps {
  color?: string
}

function cellColor ({ color }: CellProps): string | false {
  if (color == null) return false

  const colors = ['green', 'red']
  const light = colors.includes(color) && 'white'

  return light
}

export default styled.div<CellProps>`
  background: ${props => props.color};
  color: ${cellColor};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`
