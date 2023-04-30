import { useProtectedOulet } from '../hooks/useProtectedOutlet'

function User() {
  const user = useProtectedOulet()

  return user ? <div>User</div> : null
}

export default User
