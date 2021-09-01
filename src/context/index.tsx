import { createContext, ReactNode, Context } from 'react'

interface Bearer { children: ReactNode }

type ProviderProvider = (bearer: Bearer) => JSX.Element

interface Creation <T> {
  context: Context<T>
  Provider: ProviderProvider
}

export default function create <T> ({ initial, useHook }: {
  initial: T
  useHook: any
}): Creation<T> {
  const context: Context<T> = createContext(initial)

  const Provider: ProviderProvider = function Provider ({ children }) {
    const value = useHook()

    const provider = (
      <context.Provider value={value}>
        {children}
      </context.Provider>
    )

    return provider
  }

  const contextContext = { context, Provider }

  return contextContext
}
