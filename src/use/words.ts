import { useGameContext } from '../context/game'

import { Results } from '../types'

export default function useWords (): Results {
  const { history } = useGameContext()

  const words = history.filter(({ understanding }) => understanding.definition)

  return words
}
