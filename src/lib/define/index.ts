import { Definition, Field, Reading } from '../../types'

import dictionary from './dictionary.json'

const record = dictionary as Record<string, string>

export default function define (
  { field, reading }: { field: Field, reading: Reading }
): Definition {
  const row = field.rows[reading.row]
  const letters = row.slice(reading.start, reading.end + 1)

  const empty = letters.includes('')
  if (empty) {
    return null
  }

  const word = letters.join('')
  const definition = record[word]

  return definition
}
