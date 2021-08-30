import { useContext } from 'react'

import readContext from '../context/read'

import ItemStyle from '../styles/Item'
import ListStyle from '../styles/List'

export default function List (): JSX.Element {
  const { readings } = useContext(readContext)

  const items = readings.map((reading, index) => {
    const title = reading.understanding?.definition != null ? reading.understanding.definition : ''

    const item = (
      <ItemStyle key={index} title={title}>
        {reading.understanding?.word}
      </ItemStyle>
    )

    return item
  })

  return <ListStyle>{items}</ListStyle>
}
