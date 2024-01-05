import "./HomeComponent.css"
import React from 'react'
import { Link } from "react-router-dom"

function HomeComponent() {
  return (
    <div className="main">
        <h2 className="heading">Quiz App</h2>
        <Link to='/quiz'><button className="ply-btn">Play</button></Link>
        
    </div>
  )
}

export default HomeComponent