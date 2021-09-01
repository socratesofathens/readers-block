import { Field, Reading } from '../../types'

import FIELD_SIZE from '../field/size'

import letterAfter from '../after/letter'
import rowAfter from '../after/row'

import READING from '.'

export default function move (
  { field, reading }: { field: Field, reading: Reading }
): Reading {
  const nextRowIndex = rowAfter({ field, row: reading.row })
  const nextRow = field[nextRowIndex]
  const { found } = letterAfter({ row: nextRow, start: 0 })
  const nextRowReading = {
    ...READING, start: found, end: found, row: nextRowIndex
  }

  const nextStart = reading.start + 1

  const row = field[reading.row]
  const letters = row.slice(reading.start, reading.end + 1)
  const empty = letters.includes('')
  if (empty) {
    const { found, natural } = letterAfter({ row: row, start: nextStart })

    if (!natural) {
      return nextRowReading
    }

    const safeReading = {
      ...reading,
      start: found,
      end: found,
      understanding: { empty }
    }

    return safeReading
  }

  const nextEnd = reading.end + 1
  const endOver = nextEnd >= FIELD_SIZE.width

  if (endOver) {
    const startOver = nextStart >= FIELD_SIZE.width

    if (startOver) {
      return nextRowReading
    }

    const nextStartReading = { ...reading, start: nextStart, end: nextStart }

    return nextStartReading
  }

  const nextEndReading = { ...reading, end: nextEnd }

  return nextEndReading
}
