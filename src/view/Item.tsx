import ItemStyle from '../style/Item'
import { Understanding } from '../types'

export default function Item ({ understanding }: {
  understanding: Understanding
}): JSX.Element {
  const item = (
    <ItemStyle title={understanding.definition}>
      {understanding?.word}
    </ItemStyle>
  )

  return item
}
