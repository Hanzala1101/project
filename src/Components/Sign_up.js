import React from 'react'
import { Link } from 'react-router-dom'
import './Sign_Up.css'

export default function Sign_up(props) {
  return (
    <div className='grid'>
      <div className='container'>
        <div className='row'>
            <p>{props.name}</p>
            <p>{props.Text}</p>
            <p>
            <button disabled>capturing</button></p>
        </div>
        <h3>
            
        <button type="button">Start</button>
        <Link smooth to={props.next}><button type="button">Done</button></Link>
        </h3>
      </div>
    </div>
  )
}
