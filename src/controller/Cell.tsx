import { useContext } from 'react'

import boardContext from '../context/board'
import searchContext from '../context/search'

import CellView from '../view/Cell'

export default function CellController (
  { rowIndex, columnIndex }: {
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const board = useContext(boardContext)
  const { cursor } = useContext(searchContext)

  return (
    <CellView
      board={board}
      cursor={cursor}
      rowIndex={rowIndex}
      columnIndex={columnIndex}
    />
  )
}
