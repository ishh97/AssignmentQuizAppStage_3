import './QuizComponent.css'
import React, { useContext } from 'react'
import questions from './QuizQuestion.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ResultContext } from '../App'


function QuizComponent({setResult, setClicks, setCorrectClicks, setIncorrectClicks}) {
    const [count, setCount] = useState(0)
    console.log(questions);
    const ResContext = useContext(ResultContext)


    const NextQuestion = () => {
        if (count < 14) {
            setCount(count => count +1 )
            console.log("Next",count);
        }
    }
    const PrevQuestion = () =>{
        if (count > 0){
            setCount(count=> count -1)
            console.log("Pre",count);
        }
    }
    const QuitButton = ()=>{
        window.alert("Are you sure you want to quit?")
      }
    const handleCorrectAnswer = (e) => {
        if (e.target.innerHTML===questions[count].answer ){
            setResult(ResContext.result+1)
            alert('Correct Answer')
            setCount(count => count+1)
            setCorrectClicks( ResContext.correctClicks+1)
        
        }
        else{
            alert('Wrong Answer')
            setCount(count => count+1)
            setIncorrectClicks(ResContext.incorrectClicks +1)
        }
        console.log(ResContext);
        setClicks(ResContext.Clicks+1)
    }

  return (
    <div className='main'>
      <div className='content'>
        <h2 className='question-heading'>Question</h2>
        {console.log(count)}

        <p className='outOf'>{count+1} of 15</p>
        <h3 className='question'>{questions[count].question}</h3>
        <div className='options'>
          <p className='option' onClick={(e)=> handleCorrectAnswer(e)}>{questions[count].optionA}</p>
          <p className='option' onClick={(e)=> handleCorrectAnswer(e)}>{questions[count].optionB}</p>
        </div>
        <div className='options'>
          <p className='option' onClick={(e)=> handleCorrectAnswer(e)}>{questions[count].optionC}</p>
          <p className='option' onClick={(e)=> handleCorrectAnswer(e)}>{questions[count].optionD}</p>
        </div>
        <div className='buttons'>
          <button className='previous' onClick={PrevQuestion}>Previous</button>
          <button className='next' onClick={NextQuestion}>Next</button>
          <Link to='/'><button className='quit' onClick={QuitButton}>Quit</button></Link>
          <Link to="/result"><button className='finish'>Finish</button></Link>
        </div>

      </div>
    </div>
  )
}

export default QuizComponent