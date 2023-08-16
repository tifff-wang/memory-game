import Tile from './Tile.tsx'
import { TileData } from '../startingTiles.ts'
import { useState } from 'react'

interface Props {
  tiles: TileData[]
  evalMatch: () => void
}

function Board(props: Props) {
  return (
    <div className="tiles" data-testid="Board">
      {props.tiles.map((tile) => {
        return (
          <Tile
            id={tile.id}
            key={tile.id}
            info={tile.info}
            value={tile.isVisible == true ? tile.value : ''}
            isVisible={tile.isVisible}
          />
        )
      })}
    </div>
  )
}

export default Board
