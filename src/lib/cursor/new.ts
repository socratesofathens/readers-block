import CURSOR from '.'

import { Cursor, Board } from '../../types'

import lookup from './lookup'
import move from './move'

export default function NewCursor ({ board }: { board: Board }): Cursor {
  const first = board[0][0]
  const isEmpty = first === ''
  const moved = isEmpty
    ? move({ board, cursor: CURSOR })
    : CURSOR

  const looked = lookup({ cursor: moved, board, results: [] })

  return looked
}
