import Block from '../controller/Cell'

export default function Row (
  { row, rowIndex }: { row: string[], rowIndex: number }
): JSX.Element {
  const blocks = row.map((letter, index) => (
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
