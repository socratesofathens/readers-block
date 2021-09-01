import { Find, Row } from '../../types'

import after from '.'

function isLetter (element: string): boolean {
  const empty = element === ''

  return !empty
}

export default function letterAfter ({ row, start }: {
  row: Row
  start: number
}): Find {
  const letter = after<string>({
    array: row, start, finder: isLetter
  })

  return letter
}
