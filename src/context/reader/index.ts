import { createContext } from 'react'

export interface Reader {
  row: number
  start: number
  end: number
}

export const value: Reader = { row: 0, start: 0, end: 0 }

export default createContext(value)
