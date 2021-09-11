import cursorSearching from '../lib/cursor/searching'
import interpret from '../lib/interpret'
import CellStyle from '../style/Cell'

import { Block, Board, Cursor, Results } from '../types'

export default function CellView (
  { board, cursor, history, rowIndex, columnIndex, block }: {
    board: Board
    cursor: Cursor
    history: Results
    rowIndex: number
    columnIndex: number
    block?: Block
  }
): JSX.Element {
  if (block != null) {
    const blockBrick = block.bricks.find(brick => {
      const y = brick.position?.y === rowIndex
      const x = y && brick.position?.x === columnIndex

      return x
    })

    if (blockBrick != null) {
      return (
        <CellStyle color={blockBrick.color}>
          {blockBrick.letter}
        </CellStyle>
      )
    }
  }

  const row = board[rowIndex]
  const brick = row[columnIndex]

  const searching = cursorSearching({
    cursor, column: columnIndex, row: rowIndex
  })

  if (searching) {
    if (cursor.invisible) {
      const color = interpret({
        understanding: cursor.understanding,
        is: brick.color,
        not: 'lightcoral',
        already: 'lightyellow',
        empty: brick.color
      })

      return (
        <CellStyle color={color}>
          {brick.letter}
        </CellStyle>
      )
    }

    const color = interpret({
      understanding: cursor.understanding,
      is: 'green',
      not: 'red',
      already: 'yellow',
      empty: 'lightgray'
    })

    return (
      <CellStyle
        color={color}
        title={cursor.understanding?.definition}
      >
        {brick.letter}
      </CellStyle>
    )
  }

  const reversed = [...history].reverse()
  const result = reversed.find(cursor => {
    const searching = cursorSearching({
      cursor, column: columnIndex, row: rowIndex
    })

    return searching
  })

  if (result == null) {
    return (
      <CellStyle>
        {brick.letter}
      </CellStyle>
    )
  }

  const color = interpret({
    understanding: result.understanding,
    is: brick.color,
    not: 'lightcoral',
    already: 'lightyellow',
    empty: brick.color
  })

  const title = searching
    ? result?.understanding.definition
    : undefined

  return (
    <CellStyle
      color={color}
      title={title}
    >
      {brick.letter}
    </CellStyle>
  )
}
