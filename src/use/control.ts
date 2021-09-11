import { useState } from 'react'
import useMousetrap from 'react-hook-mousetrap'

const m = useMousetrap as any

export default function useControl (keys: string): boolean {
  const [pressed, setPressed] = useState(false)

  function onDown (): void {
    setPressed(true)
  }
  m(keys, onDown)

  function onUp (): void {
    setPressed(false)
  }
  m(keys, onUp, 'keyup')

  return pressed
}
