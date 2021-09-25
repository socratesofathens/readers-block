import gameGamers from '../lib/game/gamers'
import { Gamer } from '../types'
import useControl from './control'

interface Controls {
  controlling: boolean
  gamers: Gamer[]
  repeating: boolean
  north: boolean
  south: boolean
  east: boolean
  west: boolean
  clock: boolean
  counter: boolean
}

export default function useControls (): Controls {
  const up = useControl('up')
  const down = useControl('down')
  const left = useControl('left')
  const right = useControl('right')
  const w = useControl('w')
  const a = useControl('a')
  const s = useControl('s')
  const d = useControl('d')

  const south = down || s

  const west = left || a
  const east = right || d

  const clock = up || w

  const repeating = east || west || south
  const controlling = repeating || clock

  const gamers = gameGamers({ north: false, south, east, west, clock, counter: false })

  return {
    controlling, gamers, repeating, north: false, south, east, west, clock, counter: false
  }
}
