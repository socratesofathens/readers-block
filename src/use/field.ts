import { useState } from 'react'

import NewField from '../lib/field/new'

import { Field } from '../types'

export default function useField (): Field {
  const newField = NewField()

  const [field] = useState(newField)

  return field
}
