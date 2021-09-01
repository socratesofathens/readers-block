import { useContext } from 'react'

import boardContext from '../context/board'

import SearchProvider from '../context/search/Provider'

import GameStyle from '../style/Game'

import BoardView from '../view/Board'

import List from './List'

export default function GameController (): JSX.Element {
  const field = useContext(boardContext)

  return (
    <SearchProvider>
      <GameStyle>
        <BoardView board={field} />

        <List />
      </GameStyle>
    </SearchProvider>
  )
}
