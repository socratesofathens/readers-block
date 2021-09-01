import BOARD from '../lib/board'

import { Board } from '../types'

import useBoard from '../use/board'

import create from '.'

const creation = create<Board>({ initial: BOARD, useHook: useBoard })

export const {
  Provider: BoardProvider, useCreation: useBoardContext
} = creation
