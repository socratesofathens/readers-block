import { Field, Row } from '../../types'

import FIELD_SIZE from '../field/size'

import letter from './letter'
import after from '.'

function isNatural (row: Row): boolean {
  const { natural } = letter({ row, start: 0 })

  return natural
}

export default function findRow ({ field, row }: {
  field: Field
  row: number
}): number {
  const next = row + 1
  const done = next >= FIELD_SIZE.height
  const { found, natural } = after<Row>({
    array: field, start: next, finder: isNatural
  })

  const unfound = done || !natural

  if (unfound) {
    const first = findRow({ field, row: -1 })

    return first
  }

  return found
}
