import { Brick } from '../../types'
import letterBrick from './letter'

const positions = [
  { x: 5, y: 0 },
  { x: 5, y: 1 },
  { x: 6, y: 1 },
  { x: 7, y: 1 }
]

export default function blockBrick (value: unknown, index: number): Brick {
  const position = positions[index]

  const brick = letterBrick({ position, color: 'black' })

  return brick
}
