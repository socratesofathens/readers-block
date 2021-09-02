import { Cursor, Game } from '../../types'

import lookup from './lookup'
import move from './move'

export default function Next (
  { board, cursor, results }: Game
): Cursor {
  const moved = move({ board, cursor })

  const looked = lookup({ board, cursor: moved, results })

  return looked
}
