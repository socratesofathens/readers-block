import { useContext } from 'react'

import fieldContext from '../context/field'
import readContext from '../context/read'

import BlockView from '../view/Block'

export default function Block (
  { rowIndex, columnIndex }: {
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const field = useContext(fieldContext)
  const { reading } = useContext(readContext)

  return (
    <BlockView
      field={field}
      reading={reading}
      rowIndex={rowIndex}
      columnIndex={columnIndex}
    />
  )
}
