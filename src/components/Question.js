import React from 'react'
import { useState } from 'react'

// const [ currentQuestion, setCurrentQuestion ] = useState('')

// let currentIndex = 0

const Question = ({ testData }) => {

  const [questionIndex, setQuestionIndex] = useState(0)

  const [score, setScore] = useState(0)

  function compareAnswers(event, correct_answer) {
    setQuestionIndex(questionIndex + 1)

    if (event.target.value === correct_answer) {
      setScore(score + 1)
    }
  }
 
  let newArray

  function arrayMagic(correct_answer, incorrect_answers) {
    newArray = [...incorrect_answers, correct_answer ].sort()
    console.log(newArray)
  }

  return (
    <>
      <div>
        {testData.results.map((item, index) => {

          const { question, correct_answer, incorrect_answers } = item

          if (index === questionIndex) {
            {/* {createArray(correct_answer, incorrect_answers)} */ }
            { arrayMagic(correct_answer, incorrect_answers) }
            return (
              <>
                <p>Question {index + 1} out of {testData.results.length} </p>
                <p>Your score is: {score}</p>
                <h1>{question}</h1>
                {newArray.map(answer => {
                  return <button value={answer} onClick={(event) => { compareAnswers(event, correct_answer); }}>{answer}</button>
                })}
              </>
            )
          }
        })}

        {questionIndex >= testData.results.length ? <p>Quiz complete! Your final score is: {score}</p> : ""}
        </div>
    </>
  )
}

export default Question