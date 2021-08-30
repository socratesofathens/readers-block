import { Understanding } from '../types'

export default function interpret (
  { understanding, is, not, empty, read }: {
    understanding?: Understanding
    is: any
    not: any
    empty: any
    read: any
  }
): any {
  const isEmpty = understanding?.empty != null
  if (isEmpty) return empty

  const isRead = understanding?.read != null && understanding?.read
  if (isRead) return read

  const isNot = understanding?.definition == null
  if (isNot) return not

  return is
}
