import { BaseEntity } from './common'

export interface UserEntity {
  username: string
  birthDate: string
  deleted?: boolean
  email: string
  employeeNumber: string
  departmentName: string
  positionName: string
  name: string
  joiningDay: string
  years: number
  password?: string
  phoneNumber: string
  fileName?: string
  role: UserRole
  updatedAt: string
}

export interface SearchedUser {
  total: number
  first: boolean
  last: boolean
  content: UserEntity[]
}

export interface UserPayload {
  username: string
  name: string
  profile?: string
  role: UserRole
  department: string
}

export enum UserRole {
  'User' = '일반',
  'Admin' = '관리자',
}
