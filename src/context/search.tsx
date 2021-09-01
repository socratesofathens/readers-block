import SEARCH from '../lib/search'

import { Search } from '../types'

import useSearch from '../use/search'

import contextCreator from '.'

const creation = contextCreator<Search>({ initial: SEARCH, useHook: useSearch })

export const {
  Provider: SearchProvider, useCreation: useSearchContext
} = creation