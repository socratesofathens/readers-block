import { useContext } from 'react'

import { searchContext } from '../context/search'

import ListStyle from '../style/List'

import ItemView from '../view/Item'

export default function ListController (): JSX.Element {
  const { results } = useContext(searchContext)

  const items = results.map(({ understanding }) => {
    const item = (
      <ItemView key={understanding.word} understanding={understanding} />
    )

    return item
  })

  return <ListStyle>{items}</ListStyle>
}
