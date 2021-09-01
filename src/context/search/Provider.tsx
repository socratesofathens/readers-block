import { ReactNode } from 'react'

import useSearch from '../../use/search'

import context from '.'

export default function SearchProvider (
  { children }: { children: ReactNode }
): JSX.Element {
  const { Provider } = context

  const search = useSearch()

  return (
    <Provider value={search}>
      {children}
    </Provider>
  )
}
