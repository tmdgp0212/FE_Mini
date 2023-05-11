<<<<<<< HEAD
export interface User {
  username: string
  name: string
=======
import { BaseEntity } from './common'

export interface UserEntity {
  username: string
  birthDate: string
  deleted?: boolean
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053
  email: string
  role: keyof typeof UserRole
  employeeNumber: string
<<<<<<< HEAD
  phoneNumber: string
  birthDate: string
  joiningDay: string
  years: number
  department: string
  position: string
  fileName?: string
=======
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
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053
}

export interface UserPayload {
  sub?: string
  iat?: number
  exp?: number
  username: string
  name?: string
  role: keyof typeof UserRole
  department: string
  position: string
  fileName?: string
}

export enum UserRole {
<<<<<<< HEAD
  'STAFF' = '유저',
  'ADMIN' = '관리자',
=======
  'User' = '일반',
  'Admin' = '관리자',
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053
}
