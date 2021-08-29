import { useContext } from 'react'

import fieldContext from '../context/field'

import ReadingProvider from '../context/read/Provider'

import GameStyle from '../styles/Game'

import FieldView from '../view/Field'

import List from './List'

export default function Game (): JSX.Element {
  const { rows } = useContext(fieldContext)

  return (
    <ReadingProvider>
      <GameStyle>
        <FieldView rows={rows} />

        <List />
      </GameStyle>
    </ReadingProvider>
  )
}
