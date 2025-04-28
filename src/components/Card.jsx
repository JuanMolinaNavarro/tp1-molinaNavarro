import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="Juan Martin Molina Navarro"/>
        <div className='datos'>
            <h3>{props.name}</h3>
            <p>Edad: {props.edad} Años</p>
            <p>Estudiante de {props.carrera}</p>
            <p>Lenguajes de Programacion: {props.lenguajes}</p>
            <p>Idiomas: {props.idiomas}</p>
        </div>
    </div>
  )
}

export default Card