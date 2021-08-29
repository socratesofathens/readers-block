import { ReactNode } from 'react'

import useReader from '../../use/reader'

import context from './index'

export default function ReaderProvider (
  { children }: { children: ReactNode }
): JSX.Element {
  const { Provider } = context

  const reader = useReader()

  return (
    <Provider value={reader}>
      {children}
    </Provider>
  )
}
