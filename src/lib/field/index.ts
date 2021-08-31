import { Field, Row } from '../../types'
import FIELD_SIZE from './size'

function Empty (): string {
  return ''
}

function EmptyRow (): Row {
  const cells = Array.from({ length: FIELD_SIZE.width }, Empty)

  return cells
}

const FIELD: Field = Array.from({ length: FIELD_SIZE.height }, EmptyRow)

export default FIELD
