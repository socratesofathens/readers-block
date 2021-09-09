import { Gamer } from '../../types'
import is from '../is'
import eastGame from './east'
import southGame from './south'
import westGame from './west'

export default function gameGamer ({ south, east, west }: {
  south: boolean
  east: boolean
  west: boolean
}): Gamer {
  if (south) {
    return southGame
  }

  if (east) {
    return eastGame
  }

  if (west) {
    return westGame
  }

  return is
}
