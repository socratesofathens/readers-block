import Grid from '../styles/Grid'

import Row from '../view/Row'

import { Field } from '../types'

export default function FieldView ({ field }: { field: Field }): JSX.Element {
  const rowViews = field.map(
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
