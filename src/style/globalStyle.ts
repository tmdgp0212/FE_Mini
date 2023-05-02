import emotionReset from 'emotion-reset'
import { css } from '@emotion/react'
import { theme } from './theme'

const GlobalStyle = css`
  ${emotionReset}

  html, body {
    font-size: ${theme.app.size.font.base};
    height: 100%;
    font-family: 'Pretendard';
  }
`

export default GlobalStyle
