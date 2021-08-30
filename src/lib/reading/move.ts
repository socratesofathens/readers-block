import { Field, Reading } from '../../types'

import FIELD_SIZE from '../field/size'

import READING from '.'

function isOver (position: number): boolean {
  return position >= FIELD_SIZE.width
}

export default function move (
  { field, reading }: { field: Field, reading: Reading }
): Reading {
  function findSafe (row: string[]): number {
    const safe = row.findIndex((letter, index) => {
      if (index <= reading.start) return false

      if (letter === '') return false

      return true
    })

    return safe
  }

  const row = field.rows[reading.row]
  const letters = row.slice(reading.start, reading.end + 1)

  const nextRow = reading.row + 1
  const nextRowReading = { ...READING, row: nextRow }

  const empty = letters.includes('')
  if (empty) {
    const understanding = { empty }

    const safeStart = findSafe(row)

    if (safeStart != null && safeStart > -1) {
      return {
        ...reading,
        start: safeStart,
        end: safeStart,
        understanding
      }
    }

    return nextRowReading
  }

  const nextEnd = reading.end + 1
  const endOver = nextEnd >= FIELD_SIZE.width

  if (endOver) {
    const nextStart = reading.start + 1
    const startOver = isOver(nextStart)

    if (startOver) {
      const done = nextRow >= FIELD_SIZE.height

      if (done) {
        return READING
      }

      const nextRowReading = { ...READING, row: nextRow }

      return nextRowReading
    }

    const nextStartReading = { ...reading, start: nextStart, end: nextStart }

    return nextStartReading
  }

  const nextEndReading = { ...reading, end: nextEnd }

  return nextEndReading
}
