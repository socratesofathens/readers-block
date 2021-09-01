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
}

export type Results = Cursor[]

export interface Search {
  cursor: Cursor
  results: Results
}

export type Row = string[]

export type Board = Row[]

export interface Game {
  board: Board
  cursor: Cursor
  results: Results
}

export interface Found {
  found: number
  natural: boolean
  safe: boolean
}
