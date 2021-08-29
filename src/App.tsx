import FieldProvider from './context/field/Provider'

import Game from './controller/Game'

import GlobalStyle from './styles/global'

export default function App (): JSX.Element {
  return (
    <>
      <GlobalStyle />

      <FieldProvider>
        <Game />
      </FieldProvider>
    </>
  )
}
