import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const SearchType = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0 40px;
  height: 60px;
  ${({ theme }) => css`
    background-color: ${theme.app.palette.green3};
  `}
  label {
    margin-right: 10px;
  }

  select {
    width: 100px;
  }
`
