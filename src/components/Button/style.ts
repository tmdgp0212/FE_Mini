import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MaterialButton from '@mui/material/Button'
import { ButtonProps } from './index'
import { darken } from '@mui/material/styles'

export const Button = styled(MaterialButton)<ButtonProps>`
  height: 28px;
  line-height: 28px;

  ${(props) =>
    props.bg
      ? css`
          background-color: ${props.bg};
          &:hover {
            background-color: ${darken(props.bg, 0.2)};
          }
        `
      : css``}
  ${(props) =>
    props.fontcolor
      ? css`
          color: ${props.fontcolor};
        `
      : css``}
`
