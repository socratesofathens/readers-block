import { Gamer } from '../../types'
import clockGame from './clock'
import counterGame from './counter'
import dropGame from './drop'
import eastGame from './east'
import southGame from './south'
import westGame from './west'

export default function gameGamers ({
  north, south, east, west, clock, counter
}: {
  north: boolean
  south: boolean
  east: boolean
  west: boolean
  clock: boolean
  counter: boolean
}): Gamer[] {
  const gamers = []
  if (north) {
    gamers.push(dropGame)
  }

  if (east && !west) {
    gamers.push(eastGame)
  }

  if (west && !east) {
    gamers.push(westGame)
  }

  const horizontal = west || east

  if (south && !horizontal) {
    gamers.push(southGame)
  }

  if (clock) {
    gamers.push(clockGame)
  }

  if (counter) {
    gamers.push(counterGame)
  }

  return gamers
}
