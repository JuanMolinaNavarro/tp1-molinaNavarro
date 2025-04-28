import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import fotoPerfil from '../assets/perfil.JPG'

const Home = () => {
  return (
    <div>
        <Header name="Juan Martin Molina Navarro"></Header>
        <Main name='Juan Martin Molina Navarro' edad = {23} carrera = "Ingenieria en Sistemas y Tecnicatura en Programacion" img={fotoPerfil} lenguajes="SQL, C#, Visual C#, React.js" idiomas = "Español e Ingles C2" ></Main>
        <Footer name='Juan Martin Molina Navarro'></Footer>
    </div>
  )
}

export default Home