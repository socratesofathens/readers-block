import { useState, useEffect, useContext } from 'react'

import fieldContext from '../context/field'

import NextReading from '../lib/reading/next'
import NewReading from '../lib/reading/new'

import { Definition, Reading } from '../types'

export default function useReading (): Reading {
  const field = useContext(fieldContext)

  const newReading = NewReading({ field })

  const [reading, setReading] = useState<Reading>(newReading)

  const { definition } = reading

  function effect (): () => void {
    function set (reading: Reading): Reading {
      const next = NextReading({ reading, field })

      return next
    }

    function tick (): void {
      setReading(set)
    }

    function highlight (definition: Definition): number {
      const empty = definition === null
      if (empty) return 0

      const notDefined = definition === undefined
      if (notDefined) return 500

      return 1000
    }
    const delay = highlight(definition)

    const interval = setInterval(tick, delay)

    function clear (): void {
      return clearInterval(interval)
    }

    return clear
  }

  useEffect(effect, [field, definition])

  return reading
}
