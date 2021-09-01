import { Find } from '../../types'

export default function after <T> ({ array, start, finder }: {
  array: T[]
  start: number
  finder: (element: T) => boolean
}): Find {
  const sliced = array.slice(start)
  const index = sliced.findIndex(finder)

  const natural = index > -1

  const found = natural
    ? index + start
    : index

  return { found, natural }
}
