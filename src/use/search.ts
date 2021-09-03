import { useGameContext } from '../context/game'
import { Search } from '../types'

export default function useSearch (): Search {
  const { cursor, results } = useGameContext()

  const search = { cursor, results }

  return search
}
