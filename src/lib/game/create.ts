import { Game } from '../../types'

import createBoard from '../board/create'

import GAME from '.'

export default function createGame (): Game {
  const board = createBoard()
  const game = { ...GAME, board }

  return game
}
