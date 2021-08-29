import READING from '.'

import { Reading, Field } from '../../types'

import define from '../define'

export default function NewReading ({ field }: { field: Field }): Reading {
  const definition = define({ reading: READING, field })

  const reading = { ...READING, definition }

  return reading
}
