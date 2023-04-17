import React, { useState } from 'react'
import RespuestaForm from './atoms/RespuestaForm'
import RespuestaInput from './atoms/RespuestaInput'
import RespuestaButton from './atoms/RespuestaButton'

const InputRespuesta = ({ cambioForm, cambioIntentos }) => {
  const [formValue, setFormValue] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    cambioForm(parseInt(formValue))
    cambioIntentos()
  }

  const handleInputChange = (event) => {
    setFormValue(event.target.value)
  }

  return (
    <RespuestaForm onSubmit={handleSubmit}>

      <RespuestaInput
        type='number'
        placeholder='Escribe un número...'
        onChange={handleInputChange}
      />

      <RespuestaButton>¡Jugar!</RespuestaButton>
    </RespuestaForm>
  )
}

export default InputRespuesta
