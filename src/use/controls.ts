import gameGamer from '../lib/game/gamer'
import { Gamer } from '../types'
import useControl from './control'

interface Controls {
  controlling: boolean
  gamer: Gamer
}

export default function useControls (): Controls {
  const south = useControl('s,down')
  const west = useControl('a,left')
  const east = useControl('d,right')

  const controlling = south || west || east
  const gamer = gameGamer({ south, east, west })

  return { controlling, gamer }
}
