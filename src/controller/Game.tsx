import { useContext } from 'react'

import { boardContext } from '../context/board'

import { SearchProvider } from '../context/search'

import GameStyle from '../style/Game'

import BoardView from '../view/Board'

import List from './List'

export default function GameController (): JSX.Element {
  const board = useContext(boardContext)

  return (
    <SearchProvider>
      <GameStyle>
        <BoardView board={board} />

        <List />
      </GameStyle>
    </SearchProvider>
  )
}
