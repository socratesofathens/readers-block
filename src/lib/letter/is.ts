import { Brick } from '../../types'

export default function isLetter (element: Brick): boolean {
  const empty = element.letter === ''

  return !empty
}
