import { Outlet } from 'react-router-dom'
import { useProtectedOulet } from '../hooks/useProtectedOutlet'
import { UserRole } from '../types/user'

function Admin() {
  const user = useProtectedOulet()
  return user && user.role === UserRole['ADMIN'] ? <Outlet /> : null
}

export default Admin
