import { Game } from '../../types'

import NewBoard from '../board/new'

import GAME from '.'

export default function NewGame (): Game {
  const board = NewBoard()
  const game = { ...GAME, board }

  return game
}
