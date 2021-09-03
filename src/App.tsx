import { ControllerProvider } from './context/controller'
import { GameProvider } from './context/game'

import GameController from './controller/Game'

import GlobalStyle from './style/global'

export default function App (): JSX.Element {
  return (
    <>
      <GlobalStyle />

      <ControllerProvider>
        <GameProvider>
          <GameController />
        </GameProvider>
      </ControllerProvider>
    </>
  )
}
