import { Game } from '../../types'
import rotateGame from './rotate'

export default function clockGame (game: Game): Game {
  const rotation = { x: 1, y: -1 }
  const rotated = rotateGame({ game, rotation })

  return rotated
}
