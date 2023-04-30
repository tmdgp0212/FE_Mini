export interface UserPayload {
  username: string
  name: string
  profile?: string
  role: UserRole
}

export enum UserRole {
  'User' = 'User',
  'Admin' = 'Admin',
}
