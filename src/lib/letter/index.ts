const ALPHABET = 'abcdefghijklmnopqrstuvwxyztaeiouaeio'

export default function Letter (): string {
  const indexRandom = Math.random()
  const randomNumber = indexRandom * ALPHABET.length
  const randomIndex = Math.floor(randomNumber)
  const letter = ALPHABET[randomIndex]

  return letter
}
