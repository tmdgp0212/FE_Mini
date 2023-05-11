import React from 'react'
import Avatar from '@mui/material/Avatar'
import { UserPayload } from '../../types/user'
import { LoginForm } from '../Form'
<<<<<<< HEAD
import * as S from './style'
import { Link } from 'react-router-dom'
=======
import { useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053

interface UserAreaProps {
  user?: UserPayload | null
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.app.palette.black};
`

function UserArea({ user }: UserAreaProps) {
  return user ? (
    <S.AvatarWrapper>
      <Avatar alt="user" src={user.fileName ?? '/src/assets/man.png'} />
      <S.UserInfo>
        <div>{user.name}</div>
        <S.DepartmentAndPosition>
          {user.department} ({user.position})
        </S.DepartmentAndPosition>
      </S.UserInfo>
    </S.AvatarWrapper>
  ) : (
    <S.LoginArea>
      <LoginForm />
<<<<<<< HEAD
      <Link to="/signup">
        <S.RegisterButton variant="text">{'Register'.toLowerCase()}</S.RegisterButton>
      </Link>
    </S.LoginArea>
=======
      <StyledLink to="/signup">register</StyledLink>
    </div>
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053
  )
}

export default UserArea
