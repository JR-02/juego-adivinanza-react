import React, { useEffect, useState } from 'react'
import Card from './atoms/Card'
import CardContent from './atoms/CardContent'
import CardContenedor from './atoms/CardContenedor'
import Tooltip from './atoms/Tooltip'

const TableroNumero = ({ numeroRandom, form, tiro }) => {
  const [mayorMenor, setMayorMenor] = useState(null)

  useEffect(() => {
    if (form > numeroRandom) {
      setMayorMenor('Es menor')
    } else if (form < numeroRandom) {
      setMayorMenor('Es mayor')
    }
  }, [form])

  return (
    <>
      <CardContenedor>

        <Tooltip>{mayorMenor}</Tooltip>

        <Card active={tiro} error={false}>

          <CardContent>

            <h1>{numeroRandom}</h1>

          </CardContent>

        </Card>

      </CardContenedor>
    </>
  )
}

export default TableroNumero
