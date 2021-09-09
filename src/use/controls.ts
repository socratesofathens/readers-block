import gameGamer from '../lib/game/gamer'
import { Gamer } from '../types'
import useControl from './control'

interface Controls {
  controlling: boolean
  gamer: Gamer
  repeating: boolean
}

export default function useControls (): Controls {
  const north = useControl('w,up')
  const south = useControl('s,down')
  const east = useControl('d,right')
  const west = useControl('a,left')
  const clock = useControl('q')
  const counter = useControl('e')

  const repeating = south || east || west
  const controlling = north || repeating || clock || counter

  const gamer = gameGamer({ north, south, east, west, clock, counter })

  return { controlling, gamer, repeating }
}
