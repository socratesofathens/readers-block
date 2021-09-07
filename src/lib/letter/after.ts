import after from '../after'
import { Brick, Row } from '../../types'
import isLetter from './is'

export default function letterAfter ({ row, start }: {
  row: Row
  start: number
}): number | null {
  const letter = after<Brick>({
    array: row, start, finder: isLetter
  })

  return letter
}
