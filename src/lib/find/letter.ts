import { Found, Row } from '../../types'

import after from './after'

function isLetter (element: string): boolean {
  const empty = element === ''

  return !empty
}

export default function letter ({ row, start }: {
  row: Row
  start: number
}): Found {
  const letter = after<string>({
    array: row, start, finder: isLetter
  })

  return letter
}