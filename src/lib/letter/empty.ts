import { Brick } from '../../types'
import isLetter from './is'

export default function isEmpty (element: Brick): boolean {
  const letter = isLetter(element)

  return !letter
}
