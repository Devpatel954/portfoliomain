import React from 'react'
import './Title.css'

const Title = ({ title, subtitle }) => {
  return (
    <div className='title'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default Title