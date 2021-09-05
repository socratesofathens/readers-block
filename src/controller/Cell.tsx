import { useGameContext } from '../context/game'

import CellView from '../view/Cell'

export default function CellController (
  { rowIndex, columnIndex }: {
    rowIndex: number
    columnIndex: number
  }
): JSX.Element {
  const { board, history, cursor } = useGameContext()

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
