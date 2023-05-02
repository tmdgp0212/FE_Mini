import { ButtonProps as MaterialButtonProps } from '@mui/material/Button'
import * as S from './style'

export interface ButtonProps extends MaterialButtonProps {
  bg?: string
  fontColor?: string
}

function Button({ bg, fontColor, children, ...props }: ButtonProps) {
  return (
    <S.Button bg={bg} fontColor={fontColor} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
