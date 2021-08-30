import { Field, Reading } from '../../types'

import FIELD_SIZE from '../field/size'

import READING from '.'

function isOver (position: number): boolean {
  return position >= FIELD_SIZE.width
}

interface Safety {
  safe: number
  isSafe: boolean
  natural: boolean
}

function findSafe ({ row, start }: { row: string[], start: number }): Safety {
  const sliced = row.slice(start)
  const index = sliced.findIndex((letter, index) => {
    if (letter === '') return false

    return true
  })

  const safe = index === -1
    ? index
    : index + start

  const isSafe = safe != null
  const natural = isSafe && safe >= 0

  return {
    safe,
    isSafe,
    natural
  }
}

export default function move (
  { field, reading }: { field: Field, reading: Reading }
): Reading {
  function findRow (row: number): number {
    const next = row + 1
    const done = next >= FIELD_SIZE.height

    if (done) return findRow(-1)

    const nextRows = field.rows.slice(next)
    const naturalIndex = nextRows.findIndex((row) => {
      const { natural } = findSafe({ row, start: 0 })

      return natural
    })
    if (naturalIndex === -1) {
      return findRow(-1)
    }
    const naturalRow = naturalIndex + next

    return naturalRow
  }

  const row = field.rows[reading.row]
  const letters = row.slice(reading.start, reading.end + 1)

  const nextRowIndex = findRow(reading.row)
  const nextRow = field.rows[nextRowIndex]
  const { safe } = findSafe({ row: nextRow, start: 0 })
  const nextRowReading = {
    ...READING, start: safe, end: safe, row: nextRowIndex
  }

  const nextStart = reading.start + 1

  const empty = letters.includes('')
  if (empty) {
    const understanding = { empty }

    const { safe, natural } = findSafe({ row, start: nextStart })

    if (!natural) {
      return nextRowReading
    }

    const safeReading = {
      ...reading,
      start: safe,
      end: safe,
      understanding
    }

    return safeReading
  }

  const nextEnd = reading.end + 1
  const endOver = nextEnd >= FIELD_SIZE.width

  if (endOver) {
    const startOver = isOver(nextStart)

    if (startOver) {
      return nextRowReading
    }

    const nextStartReading = { ...reading, start: nextStart, end: nextStart }

    return nextStartReading
  }

  const nextEndReading = { ...reading, end: nextEnd }

  return nextEndReading
}
