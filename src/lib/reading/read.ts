import dictionary from './dictionary.json'

const record = dictionary as Record<string, string>

type Definition = string | undefined

export default function read ({ word }: { word: string }): Definition {
  const definition = record[word]

  return definition
}
