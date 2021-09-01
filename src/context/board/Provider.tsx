import { ReactNode } from 'react'

import useBoard from '../../use/board'

import context from '.'

export default function FieldProvider (
  { children }: { children: ReactNode }
): JSX.Element {
  const board = useBoard()

  const { Provider } = context

  return (
    <Provider value={board}>
      {children}
    </Provider>
  )
}
