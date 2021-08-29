import READING from '.'

import { Reading, Field } from '../../types'

import define from '../define'

export default function NewReading ({ field }: { field: Field }): Reading {
  const { word, definition } = define({ reading: READING, field })

  const reading = { ...READING, word, definition }

  return reading
}
