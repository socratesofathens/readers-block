import { Position } from '../types'

type Positions = Position[]

interface Shapes {
  [key: string]: Positions
}

const J = [
  { x: 5, y: 0 },
  { x: 5, y: 1 },
  { x: 6, y: 1 },
  { x: 7, y: 1 }
]

const L = [
  { x: 7, y: 0 },
  { x: 5, y: 1 },
  { x: 6, y: 1 },
  { x: 7, y: 1 }
]

const I = [
  { x: 6, y: 0 },
  { x: 6, y: 1 },
  { x: 6, y: 2 },
  { x: 6, y: 3 }
]

const O = [
  { x: 6, y: 0 },
  { x: 7, y: 1 },
  { x: 6, y: 0 },
  { x: 7, y: 1 }
]

const S = [
  { x: 6, y: 0 },
  { x: 7, y: 0 },
  { x: 6, y: 1 },
  { x: 5, y: 1 }
]

const Z = [
  { x: 6, y: 0 },
  { x: 5, y: 0 },
  { x: 6, y: 1 },
  { x: 7, y: 1 }
]

const T = [
  { x: 5, y: 1 },
  { x: 6, y: 0 },
  { x: 6, y: 1 },
  { x: 7, y: 1 }
]
const shapes: Shapes = { J, L, I, O, S, Z, T }

export default shapes
