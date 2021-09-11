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
  const north = useControl('w')
  const south = useControl('s')
  const east = useControl('d')
  const west = useControl('a')
  const clock = useControl('e')
  const counter = useControl('q')

  const repeating = south || east || west
  const controlling = north || repeating || clock || counter

  const gamers = gameGamers({ north, south, east, west, clock, counter })

  return {
    controlling, gamers, repeating, north, south, east, west, clock, counter
  }
}
