import dictionary from './dictionary.json'

const record = dictionary as Record<string, string>

export default function lookup (
  { word }: { word: string }
): string {
  const definition = record[word]

  return definition
}
