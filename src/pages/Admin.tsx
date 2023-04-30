import { UserRole } from '../routes/ProtectedRouter'
import { useProtectedOulet } from '../hooks/useProtectedOutlet'

function Admin() {
  const user = useProtectedOulet()

  return user && user.role === UserRole.Admin ? <div>Admin role: {JSON.stringify(user)}</div> : null
}

export default Admin
