import { GameProvider } from './context/game'

import GameController from './controller/Game'

import GlobalStyle from './style/global'

export default function App (): JSX.Element {
  return (
    <>
      <GameProvider>
        <GameController />
      </GameProvider>
    </>
  )
}
