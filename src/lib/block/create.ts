import { Block } from '../../types'

import blockBrick from '../brick/block'

import BLOCK from '.'

export default function newBlock (): Block {
  const bricks = Array.from({ length: 4 }, blockBrick)

  return { ...BLOCK, bricks }
}
