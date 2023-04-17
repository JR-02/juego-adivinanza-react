import React from 'react'
import ModalSection from './atoms/ModalSection'
import Modal from './atoms/Modal'
import ModalTitulo from './atoms/ModalTitulo'
import ModalButton from './atoms/ModalButton'
import confetti from 'canvas-confetti'

const ModalJuego = ({ reset, winner, loser }) => {
  if (winner === true) {
    confetti()
  }

  return (
    <ModalSection>
      <Modal>
        <ModalTitulo>{loser === true ? '😭 Perdiste...' : '🎉 ¡Ganaste! 🎉'}</ModalTitulo>

        <ModalButton onClick={reset}>Reiniciar el juego</ModalButton>
      </Modal>
    </ModalSection>
  )
}

export default ModalJuego
