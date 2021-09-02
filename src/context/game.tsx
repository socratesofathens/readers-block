import GAME from '../lib/game'

import { Game } from '../types'

import useGame from '../use/game'

import contextCreator from '.'

const creation = contextCreator<Game>({
  initial: GAME,
  useValue: useGame
})

export const {
  Provider: GameProvider, useCreation: useGameContext
} = creation
