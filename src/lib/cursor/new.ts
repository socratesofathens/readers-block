import CURSOR from '.'

import { Cursor, Board } from '../../types'

import define from './define'

export default function New ({ board }: { board: Board }): Cursor {
  const { understanding } = define({ cursor: CURSOR, board, results: [] })

  const cursor = { ...CURSOR, understanding }

  return cursor
}
