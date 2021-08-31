import { Field, Reading } from '../../types'

import FIELD_SIZE from '../field/size'

import READING from '.'

function isOver (position: number): boolean {
  return position >= FIELD_SIZE.width
}

function isNatural (array: string[]): boolean {
  const { natural } = findSafe({ row: array, start: 0 })

  return natural
}

interface Nature {
  found: number
  natural: boolean
}

function findNext ({ rows, start, finder }: {
  rows: any[]
  start: number
  finder: (element: any) => boolean
}): number {
  const sliced = rows.slice(start)
  const found = sliced.findIndex(finder)
  const next = found + start

  return next
}

interface Safety {
  found: number
  natural: boolean
  safe: boolean
}

function findSafe ({ row, start }: { row: string[], start: number }): Safety {
  const sliced = row.slice(start)
  const index = sliced.findIndex((letter) => letter !== '')

  const natural = index > -1

  const found = natural
    ? index + start
    : index

  const unsafe = found == null
  const safe = !unsafe && natural

  return {
    found,
    natural,
    safe
  }
}

function findNatural ({ rows, start }: {
  rows: any[]
  start: number
}): Nature {
  const sliced = rows.slice(start)
  const index = sliced.findIndex(isNatural)

  const natural = index > -1

  const found = natural
    ? index + start
    : index

  return {
    found,
    natural
  }
}

export default function move (
  { field, reading }: { field: Field, reading: Reading }
): Reading {
  function findRow (row: number): number {
    const next = row + 1
    const done = next >= FIELD_SIZE.height
    const { found } = findNatural({ rows: field.rows, start: next })
    console.log('naturalRow test:', found)

    const unnatural = found === -1
    const unfound = done || unnatural

    if (unfound) {
      const first = findRow(-1)
      console.log('first test:', first)

      return first
    }

    return found
  }

  const row = field.rows[reading.row]
  const letters = row.slice(reading.start, reading.end + 1)

  const nextRowIndex = findRow(reading.row)
  const nextRow = field.rows[nextRowIndex]
  const { found } = findSafe({ row: nextRow, start: 0 })
  const nextRowReading = {
    ...READING, start: found, end: found, row: nextRowIndex
  }

  const nextStart = reading.start + 1

  const empty = letters.includes('')
  if (empty) {
    const understanding = { empty }

    const { found, natural } = findSafe({ row, start: nextStart })

    if (!natural) {
      return nextRowReading
    }

    const safeReading = {
      ...reading,
      start: found,
      end: found,
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
