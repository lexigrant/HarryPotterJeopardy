import { useEffect, useState } from 'react';
import './App.css';
import ActiveCard from './Components/ActiveCard';
import Timer from './Components/Timer';
import triviaData from './data/triviaData';
import backgroundImage from "./assets/HarryPotter.jpg"

function App() {

  const player1 = "player1"
  const player2 = "player2"


  const [activeCard, setActiveCard] = useState(undefined);
  const [showActiveCard, setShowActiveCard] = useState(false);
  const [gameActive, setGameActive] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [playerScores, setPlayerScores] = useState({ player1: 0, player2: 0 })
  const [playerTurn, setPlayerTurn] = useState(player1)
  const [cardData, setCardData] = useState([]);

  // Added two fields to my existing data this would help with scalability if we wanted more than 5 categories 
  useEffect(() => {
    let questionNumber = 0;
    const extendedTriviaData = triviaData.map(category => {
      const extendedQuestionsData = category.questions.map(question => {
        questionNumber += 1;
        return {
          ...question,
          key: questionNumber,
          hasBeenFlipped: false,
        }
      })
      return {
        ...category,
        questions: extendedQuestionsData
      }
    })
    setCardData(extendedTriviaData)
  }, [])

  const updatePoints = (player, points) => {
    if (player === player1) {
      setPlayerScores({
        player1: playerScores[player1] + points,
        player2: playerScores[player2]
      })
    } else {
      setPlayerScores({
        player1: playerScores[player1],
        player2: playerScores[player2] + points
      })
    }
  }

  const toggleTurn = () => {
    setPlayerTurn(playerTurn === player1 ? player2 : player1)
  }

  const setCardFlipState = (card) => {
    // iterate over cardData and flip the given card
    let updatedCardData = cardData;
    for (let i = 0; i < updatedCardData.length; i++) {
      for (let j = 0; j < updatedCardData[i].questions.length; j++) {
        if (card.key === updatedCardData[i].questions[j].key) {
          updatedCardData[i].questions[j].hasBeenFlipped = true
        }
      }
    }
    setCardData(updatedCardData)
  }

  const flipCard = (card) => {
    if (!showActiveCard) {
      setActiveCard(card)
      setShowActiveCard(true)
      setCardFlipState(card);
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
    <div style={{ height: "100vh", backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}>

      <h1 style={{ fontFamily: "HarryP-MVZ6w" }} className="gameTitle">Harry Potter Jeopardy</h1>

      {gameActive ? <>
        <h2 style={{ fontFamily: "HarryP-MVZ6w" }} className="score">{`Player 1: ${playerScores.player1} | Player 2: ${playerScores.player2}`}</h2>

        <h2 style={{ fontFamily: "HarryP-MVZ6w" }} className="score">It's {playerTurn}'s turn</h2>
      </> : undefined}

      <div className="bigContainer">
        {!gameActive ? <button style={{ fontFamily: "HarryP-MVZ6w" }} onClick={() => {
          setGameActive(true)
        }} className="playButton">Play</button> :
          !showActiveCard ? <div className="board">
            {cardData.map(category => {
              return (
                <div className="categoryContainer">
                  <h2 style={{ fontFamily: "HarryP-MVZ6w" }} className="categoryTitle">{category.categoryName}</h2>
                  <div className="categoryValuesContainer">
                    {category.questions.map(card => {
                      return (
                        <div className="questionContainer" onClick={() => {
                          flipCard(card)
                        }}>
                          {!card.hasBeenFlipped ? <p style={{ fontFamily: "HarryP-MVZ6w" }} className="values">${card.value}</p> : undefined}
                        </div>)
                    })}
                  </div>
                </div>
              )
            })}
          </div> :
            <div style={{flex: "1", textAlign: "center"}}>
              <ActiveCard activeCardData={activeCard} playerTurn={playerTurn} showAnswer={showAnswer} cleanup={cleanup} toggleTurn={toggleTurn} updatePoints={updatePoints} />
              <Timer timeHasRunOutCallback={timeHasRunOut} />
            </div>
        }

      </div>
    </div>
  )
}

export default App;
