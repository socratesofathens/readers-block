import { Block } from '../../types'
import Letter from '../letter'
import NewBlock from './new'

export default function letterBlock (): Block {
  const letter = Letter()
  const block = NewBlock({ letter })

  return block
}
