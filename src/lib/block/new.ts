import { Block } from '../../types'

import BLOCK from '.'

export default function NewBlock (options?: {
  letter?: string
  color?: string
}): Block {
  const block = { ...BLOCK, ...options }

  return block
}
