import after from '../after'
import { Block, Row } from '../../types'
import afterReverse from '../after/reverse'
import isEmpty from './empty'
import isLetter from './is'

export default function letterReverse ({ row, start }: {
  row: Row
  start: number
}): number | null {
  const tokenEnd = after<Block>({ array: row, start, finder: isEmpty })
  if (tokenEnd == null) {
    const rowEnd = row.length - 1

    return rowEnd
  }

  const array = row.slice(0, tokenEnd)
  const index = afterReverse<Block>({ array, start, finder: isLetter })

  return index
}
