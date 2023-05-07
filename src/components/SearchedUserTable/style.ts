import styled from '@emotion/styled'

export const Thead = styled.thead``
export const Tbody = styled.tbody`
  cursor: default;

  .edit-btn {
    color: ${({ theme }) => theme.app.palette.gray1};
    text-decoration: underline;
    cursor: pointer;
  }
`
