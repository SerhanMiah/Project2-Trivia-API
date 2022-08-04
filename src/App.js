

import { useState, useEffect } from 'react'
import Question from './components/Question'
import axios from 'axios'

// ! react BootStrap 

// import BasicExample from './components/BasicExample'
import PageNavBar from './components/PageNavBar'

function App() {
 

  const [ testData, setTestData ] = useState([])
  // let data 

  useEffect(() => {
  
    const getData = async () => {
      try {
        const { data } = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
        console.log(data)
        setTestData(data)
        // ! this will be the entire API library

      } catch (error) {
        console.log(error)
      }
    }

    getData()
  
  }, [])

  


  function displayNextQuestion(event) {
    event.preventDefault()  
  }

  const [visibleQuestion, setVisible] = useState(false)



  const [startVisibility, setStartVisibility] = useState(true)

  const questionVisibility = () => { 
    setVisible(true) 
    setStartVisibility(false)
  }

  return (
    <div className='App'>
      <div className='hero'>
        <>
          <PageNavBar />
        </>
       
        <div className='hero-wrapper'>
       
          {/* <PageNavBar /> */}

          <h1>Welcome To The Trivia Quiz!</h1>
          {/* Need to hide H3 and button once it is clicked */}

          {startVisibility ? <>
            <h3 className='visibilty'>Click on the Start button to begin the questions!</h3>
            <button className='visibilty' onClick={questionVisibility} >Start Quiz</button>
          </> : ''
          } 
          {visibleQuestion && <Question testData={testData} onClick={questionVisibility} />}

        </div>

      </div>

      <div className="footer-wrapper">
        <footer>Made by Alex and Serhan</footer>
      </div>
      

    </div>
  )
}

export default App
