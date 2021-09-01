import { BoardProvider } from './context/board'

import GameController from './controller/Game'

import GlobalStyle from './style/global'

export default function App (): JSX.Element {
  return (
    <>
      <GlobalStyle />

      <BoardProvider>
        <GameController />
      </BoardProvider>
    </>
  )
}
