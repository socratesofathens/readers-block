import { ReactNode } from 'react'

import useField from '../../use/field'

import context from '.'

export default function FieldProvider (
  { children }: { children: ReactNode }
): JSX.Element {
  const field = useField()

  const { Provider } = context

  return (
    <Provider value={field}>
      {children}
    </Provider>
  )
}
