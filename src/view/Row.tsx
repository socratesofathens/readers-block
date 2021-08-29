import Block from '../controller/Block'

export default function Row (
  { row, rowIndex }: { row: string[], rowIndex: number }
): JSX.Element {
  const blocks = row.map((letter, index) => (
    <Block
      key={index} letter={letter} rowIndex={rowIndex} columnIndex={index}
    />
  ))

  return (
    <>
      {blocks}
    </>
  )
}
