import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './App.css';

function App() {

const [showQuestion, setShowQuestion] = useState(false)

  const dummy =
    [
      {
        category: 1,
        questions: [
          {
            value: 100
          },
          {
            value: 200
          },
          {
            value: 300
          },
          {
            value: 400
          },
          {
            value: 500
          },
        ],
      },
      {
        category: 2,
        questions: [
          {
            value: 100
          },
          {
            value: 200
          },
          {
            value: 300
          },
          {
            value: 400
          },
          {
            value: 500
          },
        ],
      },
      {
        category: 3,
        questions: [
          {
            value: 100
          },
          {
            value: 200
          },
          {
            value: 300
          },
          {
            value: 400
          },
          {
            value: 500
          },
        ],
      },
      {
        category: 4,
        questions: [
          {
            value: 100
          },
          {
            value: 200
          },
          {
            value: 300
          },
          {
            value: 400
          },
          {
            value: 500
          },
        ],
      },
      {
        category: 5,
        questions: [
          {
            value: 100
          },
          {
            value: 200
          },
          {
            value: 300
          },
          {
            value: 400
          },
          {
            value: 500
          },
        ],
      },
    ]

  return (
    <div>
      <h1 className="gameTitle">Harry Potter Jeopardy</h1>
      <div className="bigContainer">
        <div className="board">
          {dummy.map(category => {
            return (
              <div className="categoryContainer">
                <h2 className="categoryTitle">{"CATEGORY " + category.category}</h2>
                <div className="categoryValuesContainer">
                  {category.questions.map(question => {
                    return(
                    <div className="questionContainer" onClick={() => {
                      setShowQuestion(true)
                    }}>
                       <p className="values">${question.value}</p>
                    </div>)


                  })}
                </div>
              </div>
            )

          })}
        </div>
      </div>
    </div>
  )
}

export default App;
