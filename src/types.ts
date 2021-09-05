export interface Understanding {
  word?: string
  definition?: string
  empty?: boolean
  already?: boolean
}

export interface Cursor {
  row: number
  start: number
  end: number
  understanding: Understanding
  forward: boolean
}

export type Results = Cursor[]

export interface Block {
  letter?: string
  color?: string
}

export type Row = Block[]

export type Board = Row[]

export interface Game {
  board: Board
  cursor: Cursor
  history: Results
  words: Results
}

export interface Controller {
  game: Game
  setGame?: any
}
