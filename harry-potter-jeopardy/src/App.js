import { useState } from 'react';
import './App.css';
import ActiveCard from './Components/ActiveCard';
import Timer from './Components/Timer';
import triviaData from './data/triviaData';

function App() {

  const player1 = "player1"
  const player2 = "player2"

  const [activeCard, setActiveCard] = useState(undefined);
  const [showActiveCard, setShowActiveCard] = useState(false);
  const [gameActive, setGameActive] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [playerScores, setPlayerScores] = useState({ player1: 0, player2: 0 })
  const [playerTurn, setPlayerTurn] = useState(player1)

  const updatePoints = (player, points) => {
    if (player === player1) {
      setPlayerScores({
        player1: playerScores[player1] + points,
        player2: playerScores[player2]
      })
    } else {
      setPlayerScores({
        player1: playerScores[player1],
        player2: playerScores[player2]  + points
      })
    }
  }

  const toggleTurn = () => {
    setPlayerTurn(playerTurn === player1 ? player2 : player1)
  }

  const flipCard = (card) => {
    if (!showActiveCard) {
      setActiveCard(card)
      setShowActiveCard(true)
    }
  }

  const timeHasRunOut = () => {
    setShowAnswer(true)
  }

  const cleanup = () => {
    setShowActiveCard(false)
    setActiveCard(undefined)
    setShowAnswer(false)
  }

  return (
    <div>
      { activeCard ? <Timer timeHasRunOutCallback={timeHasRunOut} /> : undefined}
      <h1 style={{ fontFamily: "HarryP-MVZ6w" }} className="gameTitle">Harry Potter Jeopardy</h1>

      {gameActive ? <>
        <h2>{`Player 1: ${playerScores.player1} | Player 2: ${playerScores.player2}`}</h2>

        <h2>It's {playerTurn}'s turn</h2>
      </> : undefined}

      <div className="bigContainer">
        {!gameActive ? <button style={{ fontFamily: "HarryP-MVZ6w" }} onClick={() => {
          setGameActive(true)
        }}>Play</button> :
          !showActiveCard ? <div className="board">
            {triviaData.map(category => {
              return (
                <div className="categoryContainer">
                  <h2 style={{ fontFamily: "HarryP-MVZ6w" }} className="categoryTitle">{category.categoryName}</h2>
                  <div className="categoryValuesContainer">
                    {category.questions.map(card => {
                      return (
                        <div className="questionContainer" onClick={() => {
                          flipCard(card)
                        }}>
                          <p style={{ fontFamily: "HarryP-MVZ6w" }} className="values">${card.value}</p>
                        </div>)
                    })}
                  </div>
                </div>
              )
            })}
          </div> :
            <ActiveCard activeCardData={activeCard} playerTurn={playerTurn} showAnswer={showAnswer} cleanup={cleanup} toggleTurn={toggleTurn} updatePoints={updatePoints} />
        }

      </div>
    </div>
  )
}

export default App;
