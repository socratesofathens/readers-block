import { Brick, Position } from '../../types'
import Letter from '../letter'
import createBrick from './create'

export default function letterBrick (options?: {
  color?: string
  position?: Position
}): Brick {
  const letter = Letter()
  const brick = createBrick({ letter, ...options })

  return brick
}
