export type Definition = string | undefined | null

export interface Reading {
  row: number
  start: number
  end: number
  word?: string
  definition?: Definition
}

export interface Read {
  reading: Reading
  readings: Reading[]
}

export interface Field {
  rows: string[][]
}
