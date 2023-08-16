import Tile from './Tile.tsx'
import { TileData } from '../startingTiles.ts'
import { useState } from 'react'

interface Props {
  tiles: TileData[]
  evalMatch: (match: boolean) => void
}

function Board(props: Props) {
  const [firstTileId, setFirstTileId] = useState(-1)
  const [secondTileId, setSecondTileId] = useState(-1)
  const [isMatching, setIsMatching] = useState(false)

  function findTile(id: number): void {
    if (isMatching) {
      return
    }

    const currentTile = findTileById(id)
    currentTile.isVisible = true

    if (firstTileId < 0) {
      setFirstTileId(id)
    } else {
      setSecondTileId(id)
      setIsMatching(true)
      const prevTile = findTileById(firstTileId)
      const isMatch = currentTile.value === prevTile.value
      props.evalMatch(isMatch)
      if (isMatch) {
        setFirstTileId(-1)
        setSecondTileId(-1)
        setIsMatching(false)
      } else {
        setTimeout(() => {
          currentTile.isVisible = false
          prevTile.isVisible = false
          setFirstTileId(-1)
          setSecondTileId(-1)
          setIsMatching(false)
        }, 1000)
      }
    }
  }

  function findTileById(id: number): TileData {
    return props.tiles.filter((tile) => tile.id === id)[0]
  }

  return (
    <div className="tiles" data-testid="Board">
      {props.tiles.map((tile) => {
        return (
          <Tile
            id={tile.id}
            key={tile.id}
            info={tile.info}
            value={tile.value}
            isVisible={tile.isVisible}
            onClick={findTile}
          />
        )
      })}
    </div>
  )
}

export default Board
