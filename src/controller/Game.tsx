import ReaderProvider from '../context/reader/Provider'

import FieldView from '../view/Field'

export const FIELD_WIDTH = 13
export const FIELD_HEIGHT = 20

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
