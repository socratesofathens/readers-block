import { Position } from '../../types'

import vectorDo from './do'

function multiply ({ a, b }: { a: number, b: number }): number {
  const product = a * b

  return product
}

export default function vectorMultiply ({ a, b }: {
  a: Position
  b?: Position
}): any {
  const multiplied = vectorDo({ a, b, doer: multiply })

  return multiplied
}
