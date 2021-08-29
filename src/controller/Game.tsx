import ReaderProvider from '../context/reader/Provider'

import { FIELD_WIDTH, FIELD_HEIGHT } from '../lib/field'

import FieldView from '../view/Field'

export default function Game (): JSX.Element {
  function Row (): string[] {
    const cells = Array.from({ length: FIELD_WIDTH }, () => '')

    return cells
  }

  const field = Array.from({ length: FIELD_HEIGHT }, Row)

  return (
    <ReaderProvider>
      <FieldView field={field} />
    </ReaderProvider>
  )
}
