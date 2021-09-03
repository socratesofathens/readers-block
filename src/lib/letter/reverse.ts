import after from '../after'
import { Row } from '../../types'
import afterReverse from '../after/reverse'
import isEmpty from './empty'
import isLetter from './is'

export default function letterReverse ({ row, start }: {
  row: Row
  start: number
}): number | null {
  const tokenEnd = after<string>({ array: row, start, finder: isEmpty })
  if (tokenEnd == null) {
    return row.length - 1
  }

  const array = row.slice(0, tokenEnd)
  const index = afterReverse<string>({ array, start, finder: isLetter })

  return index
}
