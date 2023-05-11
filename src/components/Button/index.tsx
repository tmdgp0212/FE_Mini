import MaterialButton, { ButtonProps as MaterialButtonProps } from '@mui/material/Button'
import * as React from 'react'
import * as S from './style'
import Box from '@mui/material/Box'

export interface ButtonProps extends MaterialButtonProps {
  bg?: string
<<<<<<< HEAD
  fontcolor?: string
=======
  fontColor?: string
  position?: string
  children?: React.ReactNode
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053
}
// onClick: (e?:React.MouseEvent) => void;

<<<<<<< HEAD
function Button({ bg, fontcolor, children, ...props }: ButtonProps) {
  return (
    <S.Button bg={bg} fontcolor={fontcolor} {...props}>
=======
function Button({ variant = 'contained', bg, fontColor, position, children, ...props }: ButtonProps) {
  return (
    <S.Button variant={variant} bg={bg} fontColor={fontColor} {...props}>
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053
      {children}
    </S.Button>
  )
}

export default Button
