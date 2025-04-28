import React from 'react'
import linkedin from '../assets/linkedin.svg'

const Footer = (props) => {
  return (
    <div className='footer'>
            <a href="https://www.linkedin.com/in/juan-martin-molina-navarro-b2501321a/">
                <img src={linkedin} alt="" srcset="" height="30px" />
            </a>
            <p>© 2025 {props.name}. Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer


