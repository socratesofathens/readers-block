import BOARD from '../lib/board'

import { Board } from '../types'

import useBoard from '../use/board'

import contextCreator from '.'

const creation = contextCreator<Board>({ initial: BOARD, useHook: useBoard })

export const {
  Provider: BoardProvider, useCreation: useBoardContext
} = creation
