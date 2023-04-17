import React from 'react'
import NavbarTitulo from './atoms/NavbarTitulo'
import NavbarHeader from './atoms/NavbarHeader'
import NabvarButton from './atoms/NabvarButton'
import ContadorDeIntentos from '../contadorDeIntentos/ContadorDeIntentos.jsx'

const Header = ({ reset, numeroIntentos }) => {
  return (
    <NavbarHeader>
      <ContadorDeIntentos numeroIntentos={numeroIntentos} />
      <NavbarTitulo>¡Adivina el número del 1 al 10!</NavbarTitulo>
      <NabvarButton onClick={reset}>Reset</NabvarButton>
    </NavbarHeader>
  )
}

export default Header
