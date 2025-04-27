import React from 'react'
import Card from './Card'

const Main = (props) => {
  return (
    <div>
        <Card name = {props.name} edad = {props.edad} carrera = {props.carrera} img = {props.img} lenguajes={props.lenguajes}></Card>
    </div>
  )
}

export default Main