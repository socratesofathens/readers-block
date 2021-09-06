import ItemStyle from '../style/Item'
import { Cursor, Results, Understanding } from '../types'

export default function Item ({ understanding, last, recent }: {
  understanding: Understanding
  last?: Cursor
  recent: Results
}): JSX.Element {
  function isUnderstood (cursor?: Cursor): boolean {
    const understood = understanding.word === cursor?.understanding?.word

    return understood
  }
  const word = isUnderstood(last)
  const already = recent.some(isUnderstood)
  const color = already ? 'yellow' : word ? 'green' : undefined

  const item = (
    <ItemStyle title={understanding.definition} color={color}>
      {understanding.word}
    </ItemStyle>
  )

  return item
}
