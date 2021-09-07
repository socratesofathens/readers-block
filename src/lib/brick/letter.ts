import { Brick } from '../../types'
import Letter from '../letter'
import NewBrick from './new'

export default function letterBrick (): Brick {
  const letter = Letter()
  const brick = NewBrick({ letter })

  return brick
}
