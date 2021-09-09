import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

export default function useControl (keys: string): boolean {
  const [pressed, setPressed] = useState(false)

  function onPress (event: KeyboardEvent): void {
    const isDown = event.type === 'keydown'
    if (isDown) {
      setPressed(true)
    }

    const isUp = event.type === 'keyup'
    if (isUp) {
      setPressed(false)
    }
  }

  const options = { keydown: true, keyup: true }

  useHotkeys(keys, onPress, options)

  return pressed
}
