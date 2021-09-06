import { useGameContext } from '../context/game'
import ListStyle from '../style/List'
import { Understanding } from '../types'

import ItemView from '../view/Item'

function isDefined ({ understanding }: {
  understanding: Understanding
}): boolean {
  const defined = understanding.definition != null

  return defined
}

export default function ListController (): JSX.Element {
  const { history, words } = useGameContext()
  const reversed = [...history].reverse()
  const lastIndex = reversed.findIndex(isDefined)
  const last = reversed[lastIndex]

  const recent = reversed.slice(0, lastIndex)

  const sorted = [...words].sort((a, b) => {
    if (a.understanding.word == null || b.understanding.word == null) {
      return 0
    }

    if (a.understanding.word < b.understanding.word) {
      return -1
    }

    if (a.understanding.word > b.understanding.word) {
      return 1
    }

    return 0
  })

  const items = sorted.map(({ understanding }) => {
    const item = (
      <ItemView
        key={understanding.word}
        last={last}
        understanding={understanding}
        recent={recent}
      />
    )

    return item
  })

  return <ListStyle>{items}</ListStyle>
}
