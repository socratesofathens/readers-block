import { Search, Game } from '../../types'
import LookupCursor from '../cursor/lookup'

export default function LookupSearch (
  { board, cursor, history }: Game
): Search {
  const lookedCursor = LookupCursor({ board, cursor, history })

  const lookedHistory = [...history, lookedCursor]

  const lookedSearch = { cursor: lookedCursor, history: lookedHistory }

  return lookedSearch
}
