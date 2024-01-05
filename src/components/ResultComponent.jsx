import React, { useContext } from 'react'
import './ResultComponent.css'
import { Link } from 'react-router-dom'
import { ResultContext } from '../App'

function ResultComponent({resetScore}) {
    const Res = useContext(ResultContext)
    return (
        <div className='result'>
            <h2 className='result-heading'>Result</h2>
            <div className='result-content'>
                <h3 className='practice'>You Need more Practice</h3>
                <h3 className='yourScore'>Your Score is {Res.result}</h3>
                <div className="flex">
                    <div className="details">
                        <h5>Totol number of quesions</h5>
                        <h5>Number of attempted questions</h5>
                        <h5>Number of correct answers</h5>
                        <h5>Number of wrong answers</h5>
                    </div>
                    <div className="number">
                        <h5>15</h5>
                        <h5>{Res.Clicks}</h5>
                        <h5>{Res.correctClicks}</h5>
                        <h5>{Res.incorrectClicks}</h5>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <Link to='/quiz'><button className="play" onClick={resetScore}>Play Again</button></Link>
                <Link to='/'><button className="home">Back to home</button></Link>
               
            </div>
        </div>
    )
}

export default ResultComponent