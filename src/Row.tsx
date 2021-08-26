import { Cell } from './styles'

export default function Row (): JSX.Element {
  const cells = Array
    .from({ length: 13 }, () => <Cell />)

  return (
    <>
      {cells}
    </>
  )
}
