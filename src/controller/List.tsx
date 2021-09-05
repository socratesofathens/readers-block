import { useSearchContext } from '../context/search'

import ListStyle from '../style/List'

import ItemView from '../view/Item'

export default function ListController (): JSX.Element {
  const { history } = useSearchContext()

  const words = history.filter(({ understanding }) => understanding.definition)

  const items = words.map(({ understanding }) => {
    const item = (
      <ItemView key={understanding.word} understanding={understanding} />
    )

    return item
  })

  return <ListStyle>{items}</ListStyle>
}
