import GlobalStyle from './styles/global'
import Game from './controller/Game'

export default function App (): JSX.Element {
  return (
    <>
      <GlobalStyle />

      <Game />
    </>
  )
}
