import createGame from '../lib/game/create'

import { Controller } from '../types'

export default function useController (): Controller {
  const game = createGame()

  return { game }
}
