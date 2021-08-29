import { Definition } from '../../types'

export default function interpret (
  { definition, is, not, empty }: {
    definition: Definition
    is: any
    not: any
    empty: any
  }
): any {
  const isEmpty = definition === null
  if (isEmpty) return empty

  const isNot = definition === undefined
  if (isNot) return not

  return is
}
