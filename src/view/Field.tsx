import Grid from '../styles/Grid'

import Row from '../view/Row'

import { Field } from '../types'

export default function FieldView ({ rows }: Field): JSX.Element {
  const rowViews = rows.map(
    (row, index) => <Row key={index} row={row} rowIndex={index} />
  )

  return (
    <>
      <Grid>
        {rowViews}
      </Grid>
    </>
  )
}
