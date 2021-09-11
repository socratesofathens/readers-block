import { useState } from 'react'
import useMousetrap from 'react-hook-mousetrap'

type Better = (
  keys: string | string[], callback: () => void, eventType?: string
) => void
const useBetter = useMousetrap as Better

export default function useControl (keys: string): boolean {
  const [pressed, setPressed] = useState(false)

  function onDown (): void {
    setPressed(true)
  }
  useBetter(keys, onDown)

  function onUp (): void {
    setPressed(false)
  }
  useBetter(keys, onUp, 'keyup')

  return pressed
}
