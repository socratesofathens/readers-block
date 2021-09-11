import gameGamer from '../lib/game/gamer'
import { Gamer } from '../types'
import useControl from './control'

interface Controls {
  controlling: boolean
  gamer: Gamer
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
  const clock = useControl('q')
  const counter = useControl('e')

  const repeating = south || east || west
  const controlling = north || repeating || clock || counter

  const gamer = gameGamer({ north, south, east, west, clock, counter })

  return {
    controlling, gamer, repeating, north, south, east, west, clock, counter
  }
}
