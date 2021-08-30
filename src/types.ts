export interface Understanding {
  word?: string
  definition?: string
  empty?: boolean
  read?: boolean
}

export interface Reading {
  row: number
  start: number
  end: number
  understanding?: Understanding
}

export interface Read {
  reading: Reading
  readings: Reading[]
}

export interface Field {
  rows: string[][]
}
