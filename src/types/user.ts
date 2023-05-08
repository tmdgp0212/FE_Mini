import { BaseEntity } from './common'

export interface UserEntity extends BaseEntity {
  username: string
  birthDate: string
  deleted: boolean
  email: string
  employeeNumber: string
  department: string
  position: string
  name: string
  years: string
  password?: string
  phoneNumber: string
  fileName?: string
  role: UserRole
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
