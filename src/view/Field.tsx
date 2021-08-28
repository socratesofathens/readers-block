import Row from '../view/Row'
import Grid from '../styles/Grid'

export default function Field (
  { field }: { field: string[][] }
): JSX.Element {
  const rows = field.map(
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
