import { Outlet, OutletProps } from 'react-router-dom'
import { UserPayload, UserRole } from '../types/user'

export interface OutletComponentProps extends OutletProps {
  context: { user?: UserPayload | null }
}

function ProtectedRouter() {
  const isLogined = true

  const user: UserPayload = {
    username: 'oysterjung',
    name: '정석화',
    role: UserRole.Admin,
  }

  return isLogined && <Outlet context={{ user }} />
}

export default ProtectedRouter
