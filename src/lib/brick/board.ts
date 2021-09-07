import { Brick } from '../../types'

import letterBrick from './letter'

import BRICK from '.'

export default function boardBrick (): Brick {
  const emptyRandom = Math.random()
  const empty = emptyRandom > 0.8
  if (empty) return BRICK

  const letter = letterBrick()

  return letter
}
