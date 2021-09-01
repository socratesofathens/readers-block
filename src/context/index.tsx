import { createContext, ReactNode, Context, useContext } from 'react'

interface Bearer { children: ReactNode }

type ProviderProvider = (bearer: Bearer) => JSX.Element

interface Creation <T> {
  context: Context<T>
  Provider: ProviderProvider
  useCreation: () => T
}

export default function contextCreator <T> ({ initial, useHook }: {
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

  function useCreation (): T {
    return useContext(context)
  }

  const contextContext = { context, Provider, useCreation }

  return contextContext
}
