import React from 'react'
import Card from './Card'

const Main = (props) => {
  return (
    <div className='main'>
        <div className='apuntarHover'>
            <p className='texto'>Hover {'--->'}</p>
        </div>
        <Card name = {props.name} edad = {props.edad} carrera = {props.carrera} img = {props.img} lenguajes={props.lenguajes} idiomas={props.idiomas}></Card>
    </div>
  )
}

export default Main