import styled from '@emotion/styled'

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 40px;
  height: 60px;
  background-color: ${({ theme }) => theme.app.palette.green3};

  input {
    width: 100px;
    flex-grow: 1;
  }

  button {
    width: 80px;
  }
`

export const SearchType = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;
  }

  select {
    width: 100px;
  }
`
