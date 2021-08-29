import ReadingProvider from '../context/reading/Provider'

import useGame from '../use/game'

import FieldView from '../view/Field'

export default function Game (): JSX.Element {
  const { field } = useGame()

  return (
    <ReadingProvider>
      <FieldView field={field} />
    </ReadingProvider>
  )
}
