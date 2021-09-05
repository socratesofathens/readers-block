import { useGameContext } from '../context/game'
import { useSearchContext } from '../context/search'

import CellView from '../view/Cell'

export default function CellController (
  { rowIndex, columnIndex }: {
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const { board, history } = useGameContext()
  const { cursor } = useSearchContext()

  return (
    <CellView
      board={board}
      columnIndex={columnIndex}
      cursor={cursor}
      history={history}
      rowIndex={rowIndex}
    />
  )
}
