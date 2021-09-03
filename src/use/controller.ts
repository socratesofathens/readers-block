import NewGame from '../lib/game/new'

import { Controller } from '../types'

export default function useController (): Controller {
  const game = NewGame()

  return { game }
}
