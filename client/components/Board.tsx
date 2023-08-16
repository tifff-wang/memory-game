import Tile from './Tile.tsx'
import { TileData } from '../startingTiles.ts'
import { useState } from 'react'

interface Props {
  tiles: TileData[]
  evalMatch: () => void
}

function Board(props: Props) {
  const [firstTileId, setFirstTileId] = useState(-1)

  function findTile(id: number): void {
    console.log('clicked')
    const tile = props.tiles.filter((tile) => tile.id === id)[0]
    tile.isVisible = true
    console.log(tile)
    setFirstTileId(id)
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
