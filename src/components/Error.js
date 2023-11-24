import { Link } from 'react-router-dom'
import React from 'react'
const Error = () => {
  return <div className='section section-center'>
    <h2>There was an error...</h2>
    <Link to='/' className='btn'>Home</Link>
  </div>
}

export default Error
