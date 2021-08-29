
import READER from '.'

import { Reader } from '../../types'

import FIELD from '../field'

export default function nextReader (reader: Reader): Reader {
  const newEnd = reader.end + 1
  const over = newEnd >= FIELD.width

  if (over) {
    const newRow = reader.row + 1

    const done = newRow >= FIELD.height

    if (done) {
      return READER
    }

    const newReader = { ...READER, row: newRow }

    return newReader
  }

  const newReader = { ...reader, end: newEnd }

  return newReader
}
