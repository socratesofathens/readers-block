import { Brick } from '../../types'

export default function brickBlocked (brick?: Brick): boolean {
  if (brick == null) {
    return true
  }

  if (brick.letter == null) {
    return false
  }

  if (brick.letter === '') {
    return false
  }

  return true
}
