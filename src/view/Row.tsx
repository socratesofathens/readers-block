import CellController from '../controller/Cell'
import { Row } from '../types'

export default function RowView (
  { row, rowIndex }: { row: Row, rowIndex: number }
): JSX.Element {
  const cells = row.map((cell, index) => (
    <CellController
      key={index} rowIndex={rowIndex} columnIndex={index}
    />
  ))

  return (
    <>
      {cells}
    </>
  )
}
