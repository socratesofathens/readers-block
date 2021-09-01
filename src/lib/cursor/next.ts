import { Cursor, Board, Results } from '../../types'

import define from '../define'
import move from './move'

export default function Next (
  { board, cursor, results }: {
    board: Board
    cursor: Cursor
    results: Results
  }
): Cursor {
  const moved = move({ board, cursor })

  const defined = define({ board, cursor: moved, results })

  return defined
}
