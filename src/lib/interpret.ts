import { Understanding } from '../types'

export default function interpret (
  { understanding, is, not, already, empty }: {
    understanding?: Understanding
    is: any
    not: any
    already: any
    empty: any
  }
): any {
  const isEmpty = understanding?.empty != null
  if (isEmpty) return empty

  const isAlready = understanding?.already != null && understanding?.already
  if (isAlready) return already

  const isNot = understanding?.definition == null
  if (isNot) return not

  return is
}
