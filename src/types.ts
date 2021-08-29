export type Definition = string | undefined | null

export interface Reading {
  row: number
  start: number
  end: number
  definition?: Definition
}

export interface Field {
  rows: string[][]
}
