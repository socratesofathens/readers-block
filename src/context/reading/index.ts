import { createContext } from 'react'

import READING from '../../lib/reading'

import { Reading } from '../../types'

const initial: Reading = READING

export default createContext(initial)
