import { OutletProps } from 'react-router-dom'
import { UserPayload, UserRole } from '../types/user'
import Layout from '../components/Layout'
import { useState } from 'react'

export interface OutletComponentProps extends OutletProps {
  context: { user?: UserPayload | null }
}

function ProtectedRouter() {
  const [user, setUser] = useState<UserPayload | null>({
    username: 'oysterjung',
    name: '정석화',
    role: UserRole.Admin,
    department: '개발',
    // profile: 'https://picsum.photos/seed/picsum/200/300',
  })

  return <Layout user={user} />
}

export default ProtectedRouter
