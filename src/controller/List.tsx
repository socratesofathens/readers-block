import { useGameContext } from '../context/game'
import ListStyle from '../style/List'

import ItemView from '../view/Item'

export default function ListController (): JSX.Element {
  const { words } = useGameContext()

  const items = words.map(({ understanding }) => {
    const item = (
      <ItemView key={understanding.word} understanding={understanding} />
    )

    return item
  })

  return <ListStyle>{items}</ListStyle>
}
