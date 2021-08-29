import { Reading, Field } from '../../types'

import define from '../define'
import move from './move'

export default function NextReading (
  { reading, field }: { reading: Reading, field: Field }
): Reading {
  const moved = move({ reading })

  const defined = define({ field, reading: moved })

  return defined
}
