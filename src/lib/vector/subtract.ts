import { Position } from '../../types'
import vectorDo from './do'

function subtract ({ a, b }: { a: number, b: number }): number {
  const difference = a - b

  return difference
}

export default function vectorSubtract ({ a, b }: {
  a: Position
  b?: Position
}): any {
  const added = vectorDo({ a, b, doer: subtract })

  return added
}
