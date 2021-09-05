import Block from '../controller/Cell'
import { Row } from '../types'

export default function RowView (
  { row, rowIndex }: { row: Row, rowIndex: number }
): JSX.Element {
  const blocks = row.map((block, index) => (
    <Block
      key={index} rowIndex={rowIndex} columnIndex={index}
    />
  ))

  return (
    <>
      {blocks}
    </>
  )
}
