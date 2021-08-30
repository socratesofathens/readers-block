import { Reading, Field } from '../../types'

import define from '../define'
import move from './move'

export default function NextReading (
  { field, reading, readings }: {
    field: Field
    reading: Reading
    readings: Reading[]
  }
): Reading {
  const moved = move({ reading })

  const defined = define({ field, reading: moved, readings })

  return defined
}
