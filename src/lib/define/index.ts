import { Field, Reading } from '../../types'

import lookup from './lookup'

export default function define (
  { field, reading, readings }: {
    field: Field
    reading: Reading
    readings: Reading[]
  }
): Reading {
  const row = field.rows[reading.row]
  const letters = row.slice(reading.start, reading.end + 1)

  const empty = letters.includes('')
  if (empty) {
    return { ...reading, understanding: { empty: true } }
  }

  const word = letters.join('')

  const match = readings.find(reading => reading.understanding?.word === word)
  if (match != null) {
    const read = { word, read: true }

    return { ...reading, understanding: read }
  }

  const definition = lookup({ word })

  const defined = {
    word,
    definition
  }

  return { ...reading, understanding: defined }
}
