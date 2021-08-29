import { useState, useEffect } from 'react'

import nextReading from '../lib/reading/next'

import READING from '../lib/reading'

import { Reading } from '../types'

export default function useReader (): Reading {
  const [reader, setReader] = useState<Reading>(READING)

  function tick (): void {
    setReader(nextReading)
  }

  function effect (): () => void {
    const interval = setInterval(tick, 100)

    function clear (): void {
      return clearInterval(interval)
    }

    return clear
  }

  useEffect(effect, [])

  return reader
}
