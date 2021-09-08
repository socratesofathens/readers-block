import { Block } from '../../types'

import blockBrick from '../brick/block'

export default function newBlock (): Block {
  const bricks = Array.from({ length: 4 }, blockBrick)
  const center = { x: 7, y: 1 }
  const shape = 'J'

  return { bricks, center, shape }
}
