import { useContext } from 'react'

import readContext from '../context/read'

import ItemStyle from '../styles/Item'
import ListStyle from '../styles/List'

export default function List (): JSX.Element {
  const { readings } = useContext(readContext)

  const items = readings.map((reading, index) => {
    const title = reading.definition != null ? reading.definition : ''

    const item = (
      <ItemStyle key={index} title={title}>
        {reading.word}
      </ItemStyle>
    )

    return item
  })

  return <ListStyle>{items}</ListStyle>
}
