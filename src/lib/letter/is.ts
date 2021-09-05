import { Block } from '../../types'

export default function isLetter (element: Block): boolean {
  const empty = element.letter === ''

  return !empty
}
