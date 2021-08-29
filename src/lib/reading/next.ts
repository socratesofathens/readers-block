import { Reading, Field } from '../../types'

import define from '../define'
import move from './move'

export default function NextReading (
  { reading, field }: { reading: Reading, field: Field }
): Reading {
  const moved = move({ reading })

  moved.definition = define({ field, reading: moved })

  return moved
}
