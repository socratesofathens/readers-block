import { Block, Brick } from '../../types'

import BRICK from '../brick'

import BLOCK from '.'

function brickBlock (): Brick { return BRICK }

export default function newBrick (): Block {
  const bricks = Array.from({ length: 4 }, brickBlock)
  console.log('bricks test:', bricks)

  return BLOCK
}
