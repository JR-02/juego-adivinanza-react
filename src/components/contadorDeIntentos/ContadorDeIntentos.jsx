import React from 'react'
import ContadorTitulo from './atoms/ContadorTitulo'
import ContadorNumeroIntentos from './atoms/ContadorNumeroIntentos'

const ContadorDeIntentos = ({ numeroIntentos }) => {
  return (
    <div>

      <ContadorTitulo>Número de intentos:</ContadorTitulo>

      <ContadorNumeroIntentos>

        <span>0{numeroIntentos}</span>

        <span> - 03</span>

      </ContadorNumeroIntentos>

    </div>
  )
}

export default ContadorDeIntentos
