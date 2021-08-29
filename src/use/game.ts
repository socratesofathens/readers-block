import { useState } from 'react'

import FIELD from '../lib/field'
import Letter from '../lib/Letter'

import { Game } from '../types'

export default function useGame (): Game {
  function Row (): string[] {
    const cells = Array.from({ length: FIELD.width }, Letter)

    return cells
  }

  const initial = Array.from({ length: FIELD.height }, Row)

  const [field] = useState(initial)

  return { field }
}
