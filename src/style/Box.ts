import styled from 'styled-components'

interface BoxProps {
  color?: string
}

function boxColor ({ color }: BoxProps): string | false {
  if (color == null) return false

  const colors = ['green', 'red']
  const light = colors.includes(color) && 'white'

  return light
}

export default styled.div<BoxProps>`
  background: ${props => props.color};
  color: ${boxColor};
`
