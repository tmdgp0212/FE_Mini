import { useQuery } from '@tanstack/react-query'
import { getSignUp } from '../api/admin'

export const useGetSignUp = () => {
  const { data: signup } = useQuery<any, unknown, DeactivatedUser, any>({ queryKey: ['signUp'], queryFn: getSignUp })
  return { signup }
}

export interface DeactivatedUser {
  data: {
    empty: boolean
    first: boolean
    last: boolean
    content: DeActivatedContent[]
  }
}

export interface DeActivatedContent {
  birthDate: string
  departmentName: string
  email: string
  employeeNumber: string
  fileName: string
  joiningDay: string
  name: string
  password: string
  phoneNumber: string
  positionName: string
  role: string
  updatedAt: string
  username: string
  years: number
}
