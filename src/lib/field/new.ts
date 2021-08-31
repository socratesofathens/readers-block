import { Field } from '../../types'

import Letter from '../Letter'

import FIELD_SIZE from './size'

export default function NewField (
  options?: { writer?: () => string }
): Field {
  const callback = options == null || options.writer == null
    ? Letter
    : options.writer

  function Row (): string[] {
    const cells = Array.from({ length: FIELD_SIZE.width }, callback)

    return cells
  }

  const field = Array.from({ length: FIELD_SIZE.height }, Row)

  return field
}
