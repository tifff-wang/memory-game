import Board from './Board.tsx'
import { useState } from 'react'
import startingTiles from '../startingTiles.ts'

const tryAgain = 'No match, try again'
const winMessage = 'Congratulations, you matched all the tiles!'

function App() {
  const [isMatch, setIsMatch] = useState(false)
  const [matchCount, setMatchCount] = useState(0)

  const hasWon = matchCount === startingTiles.length / 2

  const reset = () => {}

  const evalMatch = (isMatch: boolean) => {
    setIsMatch(isMatch)
  }

  return (
    <div className="game">
      <h1>Welcome to the Memory Game</h1>
      <h2>Match all the tiles to win</h2>

      <Board tiles={startingTiles} evalMatch={evalMatch} />

      <h5>{hasWon && winMessage}</h5>
      <h5>{!isMatch && tryAgain}</h5>

      <div className="replaybutton">
        {hasWon && <button onClick={reset}>Play Again</button>}
      </div>
    </div>
  )
}

export default App
