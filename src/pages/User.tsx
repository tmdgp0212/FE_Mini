import { Outlet } from 'react-router-dom'
import { useProtectedOulet } from '../hooks/useProtectedOutlet'

function User() {
  const user = useProtectedOulet()

  return user ? <Outlet /> : null
}

export default User
