import styled from 'styled-components'

import FIELD_SIZE from '../lib/board/size'

const { width, height } = FIELD_SIZE
const fieldWidth = width * 10
const fieldHeight = height * 10

const ratio = width / height
const flip = height / width

export default styled.div`
  display: grid;
  grid-template-columns: repeat(${FIELD_SIZE.width}, 1fr);
  grid-template-rows: repeat(${FIELD_SIZE.height}, 1fr);
  height: 100%;
`
