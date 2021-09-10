export default function vectorDo <T, U> ({ a, b, doer }: {
  a: Record<string, U>
  b?: Record<string, U>
  doer: ({ a, b }: { a: U, b: U }) => U
}): T {
  const keys = Object.keys(a)

  const done: Record<string, U> = {}
  keys.forEach(key => {
    if (b == null) {
      b = a
    }

    const valueA = a[key]
    const valueB = b[key]
    const did = doer({ a: valueA, b: valueB })

    done[key] = did
  })

  const typed = done as unknown as T

  return typed
}
