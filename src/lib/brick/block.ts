import { Brick } from '../../types'
import shapes from '../shapes'
import letterBrick from './letter'

export default function blockBrick ({ shape, index }: {
  shape: string
  index: number
}): Brick {
  const positions = shapes[shape]

  const position = positions[index]

  const brick = letterBrick({ position, color: 'black' })

  return brick
}
