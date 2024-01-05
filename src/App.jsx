import React, { useState } from 'react'
import QuizComponent from './components/QuizComponent'
import HomeComponent from './components/HomeCOmponent'
import ResultComponent from './components/ResultComponent'
import "./App.css"
import { Route, Routes } from 'react-router'

export const ResultContext = React.createContext()

function App() {
  const [result, setResult] = useState(0)
  const [correctClicks, setCorrectClicks] = useState(0)
  const [incorrectClicks, setIncorrectClicks] = useState(0)
  const [Clicks, setClicks] = useState(0)

  const resetScore = () => {
    setResult(0)
  }
  return (
    <div>
      <ResultContext.Provider value={{result, resetScore, correctClicks, incorrectClicks, Clicks }}>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/quiz' element={<QuizComponent 
          setResult={setResult} setClicks={setClicks} setCorrectClicks={setCorrectClicks} setIncorrectClicks={setIncorrectClicks} />} />
          <Route path='/result' element={<ResultComponent />} />
        </Routes>
      </ResultContext.Provider>
    </div>
  )
}

export default App