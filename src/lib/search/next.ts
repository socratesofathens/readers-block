import { Search, Game } from '../../types'

import lookup from './lookup'
import move from '../cursor/move'

export default function NextSearch (game: Game): Search {
  const cursor = move(game)
  const moved = { ...game, cursor }

  const search = lookup(moved)

  return search
}
