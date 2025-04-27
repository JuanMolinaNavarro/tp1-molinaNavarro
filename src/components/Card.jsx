import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="Juan Martin Molina Navarro" width="200" height="300" />
        <div className='datos'>
            <p>{props.name}</p>
            <p>Edad: {props.edad}</p>
            <p>Carreras: {props.carrera}</p>
            <p>Lenguajes de Programacion: {props.lenguajes}</p>
        </div>
    </div>
  )
}

export default Card