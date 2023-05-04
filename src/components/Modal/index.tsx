import React from 'react'
import * as S from './style'

interface ModalProps {
  ModalHandler: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactElement
}

const Modal = ({ ModalHandler, children }: ModalProps) => {
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      ModalHandler(false)
    }
  }

  return (
    <S.ModalBackground onClick={(e) => closeModal(e)}>
      <S.ModalContainer>{children}</S.ModalContainer>
    </S.ModalBackground>
  )
}

export default Modal
