import emotionReset from 'emotion-reset'
import { css } from '@emotion/react'
import { theme } from './theme'

const GlobalStyle = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: ${theme.app.size.font.base};
    height: 100%;
    font-family: 'Pretendard';
  }

  input {
    outline: none;
    padding: 10px;
    height: 28px;
  }

  select {
    outline: none;
    display: block;
    padding: 0 15px;
    height: 28px;
  }
`

export default GlobalStyle
