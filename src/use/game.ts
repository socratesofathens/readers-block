import { useState } from 'react'

import GAME from '../lib/game'

import NewBoard from '../lib/board/new'

import { Game } from '../types'

export default function useGame (): Game {
  const newBoard = NewBoard()

  const [board, setBoard] = useState(newBoard)

  return { ...GAME, board, setBoard }
}
