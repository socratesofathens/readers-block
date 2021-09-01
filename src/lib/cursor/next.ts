import { Cursor, Game } from '../../types'

import define from './define'
import move from './move'

export default function Next (
  { board, cursor, results }: Game
): Cursor {
  const moved = move({ board, cursor })

  const defined = define({ board, cursor: moved, results })

  return defined
}
