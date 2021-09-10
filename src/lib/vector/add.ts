import { Position } from '../../types'
import vectorDo from './do'

function add ({ a, b }: { a: number, b: number }): number {
  const sum = a + b

  return sum
}

export default function vectorAdd ({ a, b }: {
  a: Position
  b?: Position
}): any {
  const added = vectorDo({ a, b, doer: add })

  return added
}
