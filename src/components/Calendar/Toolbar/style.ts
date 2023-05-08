import styled from '@emotion/styled'

export const Toolbar = styled.div`
  .rbc-toolbar-label {
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.app.size.font.large};
    font-weight: 600;
  }
  .rbc-btn-group {
    button {
      font-size: 12px;

      &:hover {
        background-color: ${({ theme }) => theme.app.palette.gray2};
      }
    }

    .rbc-btn {
      font-size: 12px;

      &:hover {
        background-color: ${({ theme }) => theme.app.palette.gray2};
      }
    }
  }

  .guide {
    display: flex;
    gap: 15px;
    margin-right: 25px;

    span {
      display: flex;
      align-items: center;
      gap: 5px;

      &::before {
        display: block;
        width: 16px;
        height: 16px;
        background-color: red;
        content: '';
      }

      &.duty::before {
        background-color: ${({ theme }) => theme.app.palette.green2};
        border: 1px solid ${({ theme }) => theme.app.palette.green4};
      }
      &.vacation::before {
        background-color: ${({ theme }) => theme.app.palette.yellow2};
        border: 1px solid ${({ theme }) => theme.app.palette.yellow1};
      }
    }
  }
`
