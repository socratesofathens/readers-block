import { Field, Reading } from '../../types'

import FIELD_SIZE from '../field/size'

import findLetter from '../find/letter'
import findRow from '../find/row'

import READING from '.'

export default function move (
  { field, reading }: { field: Field, reading: Reading }
): Reading {
  const nextRowIndex = findRow({ field, row: reading.row })
  const nextRow = field[nextRowIndex]
  const { found } = findLetter({ row: nextRow, start: 0 })
  const nextRowReading = {
    ...READING, start: found, end: found, row: nextRowIndex
  }

  const nextStart = reading.start + 1

  const row = field[reading.row]
  const letters = row.slice(reading.start, reading.end + 1)
  const empty = letters.includes('')
  if (empty) {
    const { found, natural } = findLetter({ row: row, start: nextStart })

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
