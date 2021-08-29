import { ReactNode } from 'react'

import useReading from '../../use/reading'

import context from '.'

export default function ReadingProvider (
  { children }: { children: ReactNode }
): JSX.Element {
  const { Provider } = context

  const reading = useReading()

  return (
    <Provider value={reading}>
      {children}
    </Provider>
  )
}
