const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

export default function Letter (): string {
  const emptyRandom = Math.random()
  const empty = emptyRandom > 0.5
  if (empty) return ''

  const indexRandom = Math.random()
  const randomNumber = indexRandom * ALPHABET.length
  const randomIndex = Math.floor(randomNumber)
  const letter = ALPHABET[randomIndex]

  return letter
}