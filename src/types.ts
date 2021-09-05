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

export interface Search {
  cursor: Cursor
  history: Results
  matches?: string []
}

export type Row = string[]

export type Board = Row[]

export interface Game {
  board: Board
  cursor: Cursor
  history: Results
}

export interface Controller {
  game: Game
  setGame?: any
}
