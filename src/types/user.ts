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

export interface User {
  username: string
  password: string
  name: string
  email: string
  role: UserRole
  employeeNumber: string
  phoneNumber: string
  birthDate: string
  joiningDay: string
  years: number
  department?: string
  position?: string
  fileName?: string
  updatedAt?: string
  createdAt?: string
}

export interface SearchedUser {
  total: number
  first: boolean
  last: boolean
  content: UserEntity[]
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
  'STAFF' = '일반',
  'ADMIN' = '관리자',
}
