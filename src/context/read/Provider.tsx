import { ReactNode } from 'react'

import useRead from '../../use/read'

import context from '.'

export default function ReadProvider (
  { children }: { children: ReactNode }
): JSX.Element {
  const { Provider } = context

  const read = useRead()

  return (
    <Provider value={read}>
      {children}
    </Provider>
  )
}
