import { Outlet } from 'react-router-dom'
import { UserRole } from '../types/user'
import NoticeForm from '../components/NoticeForm'
import { useAccessTokenInfo } from '../store/slices/userSlice'

function Admin() {
<<<<<<< HEAD
  const { user } = useAccessTokenInfo()

  console.log('payload', user.userPayload)

  return user.userPayload ? (
    UserRole[user.userPayload.role] === UserRole.ADMIN ? (
      <Outlet />
    ) : (
      <NoticeForm noticeType="notAllow" title="Access Denied" />
    )
  ) : (
    <></>
  )
=======
  const user = useProtectedOulet()
  return user && user.role === UserRole['ADMIN'] ? <Outlet /> : null
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053
}

export default Admin
