import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const ProfilePage = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`

export const ProfilesContainer = styled.div`
  display: flex;
  height: 100%;
`

export const ProfileContainer = styled.div`
  width: 500px;
  height: 640px;
  background: #ecf2f3;
  padding: 5%;
  margin: 30px;
  position: relative;
`

export const ProfileChangeContainer = styled(ProfileContainer)`
  animation: ${fadeIn} 0.3s forwards;
`

export const Authority = styled.div`
  position: absolute;
  right: 5%;
`

export const Detail = styled.div`
  font-size: ${({ theme }) => theme.app.size.font.base};
`
export const UserDetailContainer = styled.div`
  height: 100px;
  line-height: 1.4;
  margin: 20px 0 40px;
`

export const Name = styled.h4`
  font-size: ${({ theme }) => theme.app.size.font.medium};
  font-weight: 600;
`

export const UserCompanyDetail = styled.div`
  height: 100px;
  line-height: 1.4;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`

export const FormContainer = styled.div`
  display: flex;
  height: 180px;
  margin: 20px 0;
`

export const InputWrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
`
export const Warning = styled.div`
  color: red;
  font-size: 10px;
`

export const Notice = styled.div`
  color: ${({ theme }) => theme.app.palette.gray1};
  text-align: center;
  height: 40px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const Input = styled.input`
  height: 28px;
  width: 170px;
  border-radius: 3px;
  margin: 2px 0;
  border: 1px solid ${({ theme }) => theme.app.palette.gray1};
  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`
