import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import fotoPerfil from '../assets/perfil.JPG'

const Home = () => {
  return (
    <div>
        <Header name="Juan Martin Molina Navarro"></Header>
        <Main name='Juan Martin Molina Navarro' edad = {23} carrera = "Ingenieria en Sistemas y Tecnicatura en Programacion" img={fotoPerfil} lenguajes="C#, Visual C#, React.js" ></Main>
        <Footer></Footer>
    </div>
  )
}

export default Home