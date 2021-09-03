import { Search, Game } from '../../types'

import define from '../define'

export default function LookupSearch (
  { board, cursor, results }: Game
): Search {
  const row = board[cursor.row]
  const letters = row.slice(cursor.start, cursor.end + 1)

  const empty = letters.includes('')
  if (empty) {
    const emptyCursor = { ...cursor, understanding: { empty: true } }
    const emptySearch = { cursor: emptyCursor, results }

    return emptySearch
  }

  const word = letters.join('')

  const match = results.find(result => result.understanding?.word === word)
  const already = match != null
  if (already) {
    const understanding = { word, already: true }
    const alreadyCursor = { ...cursor, understanding }
    const alreadySearch = { cursor: alreadyCursor, results }

    return alreadySearch
  }

  const definition = define({ word })

  const understanding = {
    word,
    definition
  }

  const definedCursor = { ...cursor, understanding }

  if (definition == null) {
    const undefinedSearch = { cursor: definedCursor, results }

    return undefinedSearch
  }

  const definedResults = [...results, definedCursor]
  const definedSearch = { cursor: definedCursor, results: definedResults }

  return definedSearch
}
