import { useState, useEffect, useContext } from 'react'

import fieldContext from '../context/field'

import interpret from '../lib/interpret'

import NextReading from '../lib/reading/next'
import NewReading from '../lib/reading/new'

import { Reading, Read } from '../types'

function addReading (
  { reading, readings }: { reading: Reading, readings: Reading[] }
): Reading[] {
  if (reading.understanding?.definition != null) {
    const newReadings = [...readings, reading]

    return newReadings
  }

  return readings
}

export default function useRead (): Read {
  const field = useContext(fieldContext)

  const newReading = NewReading({ field })
  const initialReadings = addReading({ reading: newReading, readings: [] })

  const [reading, setReading] = useState<Reading>(newReading)
  const [readings, setReadings] = useState<Reading[]>(initialReadings)

  function effect (): () => void {
    function set (reading: Reading): Reading {
      const next = NextReading({ field, reading, readings })

      const newReadings = addReading({ reading: next, readings })
      setReadings(newReadings)

      return next
    }

    function tick (): void {
      setReading(set)
    }

    const delay = interpret({
      understanding: reading.understanding,
      is: 1000,
      not: 100,
      empty: 0,
      read: 750
    })

    const interval = setInterval(tick, delay)

    function clear (): void {
      return clearInterval(interval)
    }

    return clear
  }

  useEffect(effect, [field, reading.understanding, readings])

  return { reading, readings }
}
