import { useBoardContext } from '../context/board'
import { useSearchContext } from '../context/search'

import CellView from '../view/Cell'

export default function CellController (
  { rowIndex, columnIndex }: {
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const board = useBoardContext()
  const { cursor } = useSearchContext()

  return (
    <CellView
      board={board}
      cursor={cursor}
      rowIndex={rowIndex}
      columnIndex={columnIndex}
    />
  )
}
