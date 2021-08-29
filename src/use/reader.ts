import { useState, useEffect } from 'react'

import nextReader from '../lib/reader/next'

import READER from '../lib/reader'

import { Reader } from '../types'

export default function useReader (): Reader {
  const [reader, setReader] = useState<Reader>(READER)

  function tick (): void {
    setReader(nextReader)
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
