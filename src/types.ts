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
  invisible: boolean
}

export type Results = Cursor[]

export interface Position {
  x: number
  y: number
  [key: string]: number
}

export interface Brick {
  letter?: string
  color?: string
  position?: Position
}

export type Row = Brick[]

export type Board = Row[]

export interface Block {
  bricks: Brick[]
  center: Position
  shape: string
}

export interface Game {
  board: Board
  cursor: Cursor
  history: Results
  words: Results
  block?: Block
}

export interface Controller {
  game: Game
  setGame?: any
}

export type Control = number | null

export interface Controls {
  north: Control
  south: Control
  east: Control
  west: Control
  clock: Control
  counter: Control
}

export type Cleaner = () => void
export type Effect = Cleaner | undefined

export type Gamer = (game: Game) => Game
export type Blocker = ({ brick, game }: { brick: Brick, game: Game }) => boolean
