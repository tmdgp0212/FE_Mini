import styled from '@emotion/styled'

export const PagenationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;

  .Mui-selected {
    background-color: ${({ theme }) => theme.app.palette.green1};
    color: #fff;

    &:hover {
      background-color: green;
    }
  }

  .MuiPaginationItem-root:hover {
    background-color: ${({ theme }) => theme.app.palette.green3};
  }

  .Mui-selected:hover {
    background-color: green;
  }

  .MuiTouchRipple-root {
    color: ${({ theme }) => theme.app.palette.green1};
  }
`
