import styled from 'styled-components'

function color ({ length }: { length: number }): string | undefined {
  if (length >= 10) {
    return 'green'
  }
}

const TitleStyle = styled.h5`
  color: ${color};
`

export default TitleStyle
