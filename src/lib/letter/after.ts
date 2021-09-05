import after from '../after'
import { Block, Row } from '../../types'
import isLetter from './is'

export default function letterAfter ({ row, start }: {
  row: Row
  start: number
}): number | null {
  const letter = after<Block>({
    array: row, start, finder: isLetter
  })

  return letter
}
