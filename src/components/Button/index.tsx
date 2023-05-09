import { ButtonProps as MaterialButtonProps } from '@mui/material/Button'
import * as S from './style'

export interface ButtonProps extends MaterialButtonProps {
  bg?: string
  fontcolor?: string
}

function Button({ bg, fontcolor, children, ...props }: ButtonProps) {
  return (
    <S.Button bg={bg} fontcolor={fontcolor} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
