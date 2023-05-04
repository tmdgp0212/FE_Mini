import React from 'react'
import * as S from './style'

interface TextProps {
  text: string
}

function CheckBox({ text }: TextProps) {
  return (
    <S.Container>
      <input type="checkbox" />
      <span>{text}</span>
    </S.Container>
  )
}

export default CheckBox
