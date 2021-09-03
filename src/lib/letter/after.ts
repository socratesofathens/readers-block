import after from '../after'
import { Row } from '../../types'
import isLetter from './is'

export default function letterAfter ({ row, start }: {
  row: Row
  start: number
}): number | null {
  const letter = after<string>({
    array: row, start, finder: isLetter
  })

  return letter
}
