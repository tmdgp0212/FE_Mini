import React from 'react'
import { UserPayload } from '../../types/user'
import Avatar from '@mui/material/Avatar'
import { LoginForm } from '../Form'
import { useTheme } from '@mui/material'

interface UserAreaProps {
  user?: UserPayload | null
}

function UserArea({ user }: UserAreaProps) {
  const theme = useTheme()

  return user ? (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Avatar alt="user" src={user?.profile ?? '/src/assets/man.png'} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div>{user.name}</div>
        <div style={{ fontSize: theme.app.size.font.small, color: theme.app.palette.gray1 }}>{user.department}</div>
      </div>
    </div>
  ) : (
    <div style={{ display: 'flex' }}>
      <LoginForm />
      <button>register</button>
    </div>
  )
}

export default UserArea
