import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className='grid'>
        <p>you Are Authenticated</p>
        <Link smooth to='/SignIn'><button>Log Out</button></Link>
    </div>
  )
}
