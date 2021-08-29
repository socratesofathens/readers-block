import { useState, useEffect, useContext } from 'react'

import fieldContext from '../context/field'

import interpret from '../lib/define/interpret'

import NextReading from '../lib/reading/next'
import NewReading from '../lib/reading/new'

import { Reading, Read } from '../types'

export default function useRead (): Read {
  const field = useContext(fieldContext)

  const newReading = NewReading({ field })

  const [reading, setReading] = useState<Reading>(newReading)
  const [readings, setReadings] = useState<Reading[]>([])

  const { definition } = reading

  function effect (): () => void {
    function set (reading: Reading): Reading {
      const next = NextReading({ reading, field })

      if (next.definition != null) {
        const newReadings = [...readings, next]

        setReadings(newReadings)
      }

      return next
    }

    function tick (): void {
      setReading(set)
    }

    const delay = interpret({ definition, is: 1000, not: 500, empty: 0 })

    const interval = setInterval(tick, delay)

    function clear (): void {
      return clearInterval(interval)
    }

    return clear
  }

  useEffect(effect, [field, definition, readings])

  return { reading, readings }
}
