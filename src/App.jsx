import React, { useState, useEffect } from 'react'
import Header from './components/header/Header.jsx'
import TableroNumero from './components/tableroNumero/TableroNumero.jsx'
import InputRespuesta from './components/inputRespuesta/InputRespuesta.jsx'
import ModalJuego from './components/modalJuego/ModalJuego.jsx'

const App = () => {
  const [form, setForm] = useState('')
  const [winner, setWinner] = useState(false)
  const [loser, setLoser] = useState(false)
  const [numeroRandom, setNumeroRandom] = useState(Math.floor((Math.random() * 10) + 1))
  const [intentos, setIntentos] = useState(0)

  const resetGame = () => {
    setForm('')
    setWinner(false)
    setLoser(false)
    setNumeroRandom((Math.floor((Math.random() * 10) + 1)))
    setIntentos(0)
  }

  const comprobarRespuesta = () => {
    if (numeroRandom === form) {
      setWinner(true)
    } else if (intentos >= 3) {
      setLoser(true)
    }
  }

  const sumarIntentos = () => {
    setIntentos(intentos + 1)
  }

  useEffect(() => {
    comprobarRespuesta()
  })

  return (
    <>
      <Header reset={resetGame} numeroIntentos={intentos} />
      <TableroNumero numeroRandom={numeroRandom} form={form} tiro={winner} />
      <InputRespuesta cambioForm={setForm} cambioIntentos={sumarIntentos} />
      {
        winner === true && (
          <ModalJuego winner reset={resetGame} />
        )
      }
      {
        loser === true && (
          <ModalJuego loser reset={resetGame} />
        )
      }
    </>
  )
}

export default App
