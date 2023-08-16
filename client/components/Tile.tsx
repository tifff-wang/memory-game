import { TileData } from '../startingTiles.ts'

interface Props extends TileData {
  onClick: (id: number) => void
}

function Tile(props: Props) {
  const handleClick = (): void => props.onClick(props.id)

  return (
    <button className="tile" onClick={handleClick}>
      {props.isVisible ? props.value : ''}
    </button>
  )
}

export default Tile
