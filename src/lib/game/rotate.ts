import { Game, Position } from '../../types'
import brickBlocked from '../blocked/brick'

import brickRotator from '../brick/rotator'

export default function rotateGame ({ game, rotation }: {
  game: Game
  rotation: Position
}): Game {
  if (game.block == null) {
    return game
  }

  const center = game.block.bricks[2]

  const rotator = brickRotator({ center, rotation })
  const positions = game.block.bricks.map(rotator)

  const centerBlocked = game.block.bricks.some((brick, index) => {
    const position = positions[index]
    const row = game.board[position.y]
    if (row == null) {
      return true
    }

    const cell = row[position.x]
    const blocked = brickBlocked(cell)

    return blocked
  })
  if (!centerBlocked) {
    const bricks = game.block.bricks.map((brick, index) => {
      const position = positions[index]
      const positioned = { ...brick, position }

      return positioned
    })

    const block = { ...game.block, bricks }
    const rotated = { ...game, block }

    return rotated
  }

  const left = positions.map(position => {
    const moved = { ...position, x: position.x - 1 }

    return moved
  })
  const leftBlocked = game.block.bricks.some((brick, index) => {
    const position = left[index]
    const row = game.board[position.y]
    if (row == null) {
      return true
    }

    const cell = row[position.x]
    const blocked = brickBlocked(cell)

    return blocked
  })
  if (!leftBlocked) {
    const bricks = game.block.bricks.map((brick, index) => {
      const position = left[index]
      const positioned = { ...brick, position }

      return positioned
    })

    const block = { ...game.block, bricks }
    const rotated = { ...game, block }

    return rotated
  }

  const right = positions.map(position => {
    const moved = { ...position, x: position.x + 1 }

    return moved
  })
  const rightBlocked = game.block.bricks.some((brick, index) => {
    const position = right[index]
    const row = game.board[position.y]
    if (row == null) {
      return true
    }

    const cell = row[position.x]
    const blocked = brickBlocked(cell)

    return blocked
  })
  if (!rightBlocked) {
    const bricks = game.block.bricks.map((brick, index) => {
      const position = right[index]
      const positioned = { ...brick, position }

      return positioned
    })

    const block = { ...game.block, bricks }
    const rotated = { ...game, block }

    return rotated
  }

  return game
}
