import { Brick, Position } from '../../types'
import Letter from '../letter'
import newBrick from './new'

export default function letterBrick (options?: {
  color?: string
  position?: Position
}): Brick {
  const letter = Letter()
  const brick = newBrick({ letter, ...options })

  return brick
}
