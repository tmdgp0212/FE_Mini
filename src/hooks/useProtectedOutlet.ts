import { useNavigate, useOutletContext } from 'react-router-dom'
import { OutletComponentProps } from '../routes/ProtectedRouter'
import { useEffect } from 'react'

export const useProtectedOulet = () => {
  const outletContext = useOutletContext<OutletComponentProps['context']>()
  const user = outletContext.user
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user])

  return user
}
