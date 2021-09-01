import { Found } from '../../types'

export default function after <T> ({ array, start, finder }: {
  array: T[]
  start: number
  finder: (element: T) => boolean
}): Found {
  const sliced = array.slice(start)
  const index = sliced.findIndex(finder)

  const natural = index > -1

  const found = natural
    ? index + start
    : index

  const unfound = found == null
  const safe = !unfound && natural

  return { found, natural, safe }
}
