import { Game } from '../../types'
import read from '../read'
import NextSearch from '../search/next'

export default function nextGame (game: Game): Game {
  const { board: readBoard, cursor: readCursor } = read(game)
  const readGame = {
    ...game, board: readBoard, cursor: readCursor
  }

  const { cursor, history } = NextSearch(readGame)
  const newGame = { ...readGame, cursor, history }

  return newGame
}
