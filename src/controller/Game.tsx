import { useContext } from 'react'

import fieldContext from '../context/field'

import ReadingProvider from '../context/reading/Provider'

import FieldView from '../view/Field'

export default function Game (): JSX.Element {
  const { rows } = useContext(fieldContext)

  return (
    <ReadingProvider>
      <FieldView rows={rows} />
    </ReadingProvider>
  )
}
