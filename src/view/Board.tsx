import Grid from '../style/Grid'

import Row from './Row'

import { Board } from '../types'

export default function BoardView ({ board }: { board: Board }): JSX.Element {
  const rows = board.map(
    (row, index) => <Row key={index} row={row} rowIndex={index} />
  )

  return (
    <>
      <Grid>
        {rows}
      </Grid>
    </>
  )
}
