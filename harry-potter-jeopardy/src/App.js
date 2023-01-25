import { useState } from 'react';
import './App.css';
import triviaData from './data/triviaData';

function App() {

const [showQuestion, setShowQuestion] = useState(false)
const [activeQuestion, setActiveQuestion] = useState(false)
const [gameActive, setGameActive] = useState(false)



    const flipCard = (question) => {
      if(!showQuestion) {
        setActiveQuestion(question)
        setShowQuestion(true)
      } 
    }


  return (
    <div>
      <h1 style={{fontFamily: "HarryP-MVZ6w"}} className="gameTitle">Harry Potter Jeopardy</h1>
      <div className="bigContainer">
      {!gameActive ? <button style={{fontFamily: "HarryP-MVZ6w"}} onClick={() => {
        setGameActive(true)
      }}>Play</button> :
      !showQuestion ? <div className="board">
        {triviaData.map(category => {
          return (
            <div className="categoryContainer">
              <h2 style={{fontFamily: "HarryP-MVZ6w"}} className="categoryTitle">{category.categoryName}</h2>
              <div className="categoryValuesContainer">
                {category.questions.map(question => {
                  return(
                  <div className="questionContainer" onClick={() => {
                    flipCard(question.trivia)
                    
                  }}>
                      <p style={{fontFamily: "HarryP-MVZ6w"}} className="values">${question.value}</p>
                  </div>)
                })}
              </div>
            </div>
          )
        })}
      </div> : <p style={{fontFamily: "HarryP-MVZ6w"}}>{activeQuestion}</p> }
      </div>
    </div>
  )
}

export default App;
