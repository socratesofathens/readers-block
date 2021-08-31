import { useContext } from 'react'

import fieldContext from '../context/field'

import ReadProvider from '../context/read/Provider'

import GameStyle from '../style/Game'

import FieldView from '../view/Field'

import List from './List'

export default function Game (): JSX.Element {
  const field = useContext(fieldContext)

  return (
    <ReadProvider>
      <GameStyle>
        <FieldView field={field} />

        <List />
      </GameStyle>
    </ReadProvider>
  )
}
