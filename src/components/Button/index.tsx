import MaterialButton, { ButtonProps as MaterialButtonProps } from '@mui/material/Button'
import * as React from 'react'
import * as S from './style'
import Box from '@mui/material/Box'

export interface ButtonProps extends MaterialButtonProps {
  bg?: string
  fontColor?: string
  position?: string
  children?: React.ReactNode
}
// onClick: (e?:React.MouseEvent) => void;

function Button({ variant = 'contained', bg, fontColor, position, children, ...props }: ButtonProps) {
  return (
    <S.Button variant={variant} bg={bg} fontColor={fontColor} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
