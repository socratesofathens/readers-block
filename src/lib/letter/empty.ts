import isLetter from './is'

export default function isEmpty (element: string): boolean {
  const letter = isLetter(element)

  return !letter
}
