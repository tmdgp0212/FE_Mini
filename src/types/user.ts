export interface User {
  username: string
  name: string
  email: string
  role: keyof typeof UserRole
  employeeNumber: string
  phoneNumber: string
  birthDate: string
  joiningDay: string
  years: number
  department: string
  position: string
  fileName?: string
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
  'STAFF' = '유저',
  'ADMIN' = '관리자',
}
