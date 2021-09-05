import { Block } from '../../types'
import isLetter from './is'

export default function isEmpty (element: Block): boolean {
  const letter = isLetter(element)

  return !letter
}
