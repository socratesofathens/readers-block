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
  const index = sliced.findIndex((letter) => {
    if (letter === '') return false

    return true
  })

  const unnatural = index === -1

  const safe = unnatural
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

function isNatural (array: string[]): boolean {
  const { natural } = findSafe({ row: array, start: 0 })

  return natural
}

interface Nature {
  found: number
  natural: boolean
}

function findNatural ({ rows, start }: {
  rows: any[]
  start: number
}): Nature {
  const sliced = rows.slice(start)
  console.log('sliced test:', sliced)
  const index = sliced.findIndex(isNatural)
  console.log('naturalIndex test:', index)
  const natural = index > -1
  if (!natural) {
    return {
      found: index,
      natural
    }
  }

  const found = index + start

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
