import { Gamer } from '../../types'
import is from '../is'
import clockGame from './clock'
import counterGame from './counter'
import dropGame from './drop'
import eastGame from './east'
import southGame from './south'
import westGame from './west'

export default function gameGamer ({
  north, south, east, west, clock, counter
}: {
  north: boolean
  south: boolean
  east: boolean
  west: boolean
  clock: boolean
  counter: boolean
}): Gamer {
  if (north) {
    return dropGame
  }

  if (south) {
    return southGame
  }

  if (east) {
    return eastGame
  }

  if (west) {
    return westGame
  }

  if (clock) {
    return clockGame
  }

  if (counter) {
    return counterGame
  }

  return is
}
