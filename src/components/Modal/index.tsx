import React from 'react'
import * as S from './style'

interface ModalProps {
  children: React.ReactElement
}

const Modal = ({ children }: ModalProps) => {
  return (
    <S.ModalBackground>
      <S.ModalContainer>{children}</S.ModalContainer>
    </S.ModalBackground>
  )
}

export default Modal
