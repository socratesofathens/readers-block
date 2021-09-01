import styled from 'styled-components'

import FIELD_SIZE from '../lib/board/size'

export default styled.div`
  display: grid;
  grid-template-columns: repeat(${FIELD_SIZE.width}, 1fr);
  grid-template-rows: repeat(${FIELD_SIZE.height}, 1fr);
  width: 65vmin;
  height: 100vmin;
`
