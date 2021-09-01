import FieldProvider from './context/board/Provider'

import GameController from './controller/Game'

import GlobalStyle from './style/global'

export default function App (): JSX.Element {
  return (
    <>
      <GlobalStyle />

      <FieldProvider>
        <GameController />
      </FieldProvider>
    </>
  )
}
