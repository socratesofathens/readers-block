import { Position } from '../types'
import { BOARD_WIDTH } from './board/size'

type Positions = Position[]

interface Shapes {
  [key: string]: Positions
}

const middle = BOARD_WIDTH / 2
const center = Math.floor(middle)
const left = center - 1
const right = center + 1

const J = [
  { x: left, y: 0 },
  { x: left, y: 1 },
  { x: center, y: 1 },
  { x: right, y: 1 }
]

const L = [
  { x: right, y: 0 },
  { x: left, y: 1 },
  { x: center, y: 1 },
  { x: right, y: 1 }
]

const I = [
  { x: center, y: 0 },
  { x: center, y: 1 },
  { x: center, y: 2 },
  { x: center, y: 3 }
]

const O = [
  { x: center, y: 0 },
  { x: right, y: 0 },
  { x: center, y: 1 },
  { x: right, y: 1 }
]

const S = [
  { x: center, y: 0 },
  { x: right, y: 0 },
  { x: left, y: 1 },
  { x: center, y: 1 }
]

const Z = [
  { x: left, y: 0 },
  { x: center, y: 0 },
  { x: center, y: 1 },
  { x: right, y: 1 }
]

const T = [
  { x: center, y: 0 },
  { x: left, y: 1 },
  { x: center, y: 1 },
  { x: right, y: 1 }
]
const shapes: Shapes = { J, L, I, O, S, Z, T }

export default shapes
