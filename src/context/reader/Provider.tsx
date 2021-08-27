import { useEffect, ReactNode, useState } from 'react'

import { FIELD_HEIGHT, FIELD_WIDTH } from '../../controller/Game'

import context, { Reader, value } from './index'

export default function ReaderProvider (
  { children }: { children: ReactNode }
): JSX.Element {
  const { Provider } = context

  const [reader, setReader] = useState<Reader>(value)

  function effect (): () => void {
    function set (reader: Reader): Reader {
      const newEnd = reader.end + 1
      const over = newEnd >= FIELD_WIDTH

      if (over) {
        const newRow = reader.row + 1

        const done = newRow >= FIELD_HEIGHT

        if (done) {
          return value
        }

        const newReader = { ...value, row: newRow }

        return newReader
      }

      const newReader = { ...reader, end: reader.end + 1 }

      return newReader
    }

    function tick (): void {
      setReader(set)
    }

    const interval = setInterval(tick, 100)

    function clear (): void {
      return clearInterval(interval)
    }

    return clear
  }

  useEffect(effect, [])

  return (
    <Provider value={reader}>
      {children}
    </Provider>
  )
}
