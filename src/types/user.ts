import { BaseEntity } from './common'

export interface UserEntity extends BaseEntity {
  username: string
  birthDate: string
  deleted: boolean
  email: string
  employeeNumber: string
  department: string
  positionName: string
  name: string
  joiningDay: string
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

export const enum UserRole {
  'ADMIN' = 'ADMIN',
  'STAFF' = 'STAFF',
}
