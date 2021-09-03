export default function after <T> ({ array, start, finder }: {
  array: T[]
  start: number
  finder: (element: T) => boolean
}): number | null {
  const sliced = array.slice(start)
  const found = sliced.findIndex(finder)

  if (found < 0) {
    return null
  }

  const index = start + found

  return index
}
