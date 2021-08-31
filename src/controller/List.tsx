import { useContext } from 'react'

import readContext from '../context/read'

import ListStyle from '../style/List'

import ItemView from '../view/Item'

export default function List (): JSX.Element {
  const { readings } = useContext(readContext)

  const items = readings.map((reading, index) => {
    const item = (
      <ItemView key={index} understanding={reading.understanding} />
    )

    return item
  })

  return <ListStyle>{items}</ListStyle>
}
