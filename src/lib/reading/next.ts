
import READING from '.'

import { Reading } from '../../types'

import FIELD from '../field'

function isOver (position: number): boolean {
  return position >= FIELD.width
}

export default function nextReading (reader: Reading): Reading {
  const { start, end, row } = reader
  const nextEnd = end + 1
  const endOver = nextEnd >= FIELD.width

  if (endOver) {
    const nextStart = start + 1
    const startOver = isOver(nextStart)

    if (startOver) {
      const nextRow = row + 1

      const done = nextRow >= FIELD.height

      if (done) {
        return READING
      }

      const nextRowReading = { ...READING, row: nextRow }

      return nextRowReading
    }

    const nextStartReading = { ...reader, start: nextStart, end: nextStart }

    return nextStartReading
  }

  const nextEndReading = { ...reader, end: nextEnd }

  return nextEndReading
}
