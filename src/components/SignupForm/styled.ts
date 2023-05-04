import styled from '@emotion/styled'
import MaterialButton from '@mui/material/Button'
export const SignUpBtn = styled(MaterialButton)`
  max-width: 500px;
  height: 500px;
  border-color: ${({ theme }) => theme.app.palette.green1};
  &:hover {
    color: ${({ theme }) => theme.app.palette.white};
    background-color: ${({ theme }) => theme.app.palette.green1};
  }
`
export const IdCheck = styled.button`
  background-color: ${({ theme }) => theme.app.palette.gray1};
  border: none;
  width: 120px;
  height: 35px;
  font-size: 20px;
  margin-left: 50px;
  text-align: center;
  border-radius: 3px;
  font-weight: 700;
`
