import styled from 'styled-components'

import FIELD_SIZE from '../lib/board/size'

const ratio = FIELD_SIZE.width / FIELD_SIZE.height
const width = 100 * ratio

export default styled.div`
  display: grid;
  grid-template-columns: repeat(${FIELD_SIZE.width}, 1fr);
  grid-template-rows: repeat(${FIELD_SIZE.height}, 1fr);
  width: ${width}vmin;
  height: 100vmin;
`
