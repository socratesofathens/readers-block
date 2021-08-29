import { Reading } from '../../types'

import FIELD_SIZE from '../field/size'

import READING from '.'

function isOver (position: number): boolean {
  return position >= FIELD_SIZE.width
}

export default function move (
  { reading }: { reading: Reading }
): Reading {
  const nextEnd = reading.end + 1
  const endOver = nextEnd >= FIELD_SIZE.width

  if (endOver) {
    const nextStart = reading.start + 1
    const startOver = isOver(nextStart)

    if (startOver) {
      const nextRow = reading.row + 1

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
