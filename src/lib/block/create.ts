import { Block, Brick } from '../../types'

import blockBrick from '../brick/block'

import shapes from '../shapes'

import BLOCK from '.'

export default function createBlock (): Block {
  const keys = Object.keys(shapes)
  const chaos = Math.random()
  const random = chaos * keys.length
  const index = Math.floor(random)
  const shape = keys[index]

  function createBrick (value: unknown, index: number): Brick {
    const brick = blockBrick({ shape, index })

    return brick
  }

  const bricks = Array.from({ length: 4 }, createBrick)

  return { ...BLOCK, bricks, shape }
}
