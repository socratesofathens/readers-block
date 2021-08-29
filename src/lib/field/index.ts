import FIELD_SIZE from './size'

function Empty (): string {
  return ''
}

function Row (): string[] {
  const cells = Array.from({ length: FIELD_SIZE.width }, Empty)

  return cells
}

const rows = Array.from({ length: FIELD_SIZE.height }, Row)

const FIELD = { rows }

export default FIELD
