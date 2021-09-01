import { useState } from 'react'

import NewBoard from '../lib/board/new'

import { Board } from '../types'

export default function useBoard (): Board {
  const newBoard = NewBoard()

  const [board] = useState(newBoard)

  return board
}
