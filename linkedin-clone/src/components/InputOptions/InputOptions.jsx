import React from 'react'
import './inputOptions.css'

const InputOptions = ({Icon, title, color}) => {
  return (
    <div className='inputOption'>
        <Icon htmlColor={color}/>
        <h3>{title}</h3>
    </div>
  )
}

export default InputOptions