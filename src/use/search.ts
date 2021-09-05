import { useGameContext } from '../context/game'
import { Search } from '../types'

export default function useSearch (): Search {
  const { cursor, history } = useGameContext()

  const search = { cursor, history }

  return search
}
