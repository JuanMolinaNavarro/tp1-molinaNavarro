import React from 'react'

const Header = (props) => {
  return (
    <div className='header'>
        <h1>Portfolio {props.name}</h1>
        <hr/>
    </div>
  )
}

export default Header