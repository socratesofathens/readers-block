import { Row } from '../../types'
import letterReverse from '../letter/reverse'

export default function validReverse ({ row, x }: {
  row: Row
  x: number
}): number {
  const reversed = letterReverse({ row, start: x })

  if (reversed == null) {
    throw new Error('Invalid reverse')
  }

  return reversed
}
