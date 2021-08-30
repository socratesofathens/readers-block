import READING from '.'

import { Reading, Field } from '../../types'

import define from '../define'

export default function NewReading ({ field }: { field: Field }): Reading {
  const { understanding } = define({ reading: READING, field, readings: [] })

  const reading = { ...READING, understanding }

  return reading
}
