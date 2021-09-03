export default function afterReverse <T> ({ array, start, finder }: {
  array: T[]
  start: number
  finder: (element: T) => boolean
}): number | null {
  const sliced = array.slice(start)

  const indexes = Object.keys(sliced).reverse()
  const indexString = indexes.find(index => {
    const int = parseInt(index)
    const element = sliced[int]

    const found = finder(element)

    return found
  })

  if (indexString != null) {
    const number = parseInt(indexString)
    const after = start + number

    return after
  }

  return null
}
