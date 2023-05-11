import { User } from './user'

export interface Vacation {
  id: number
  start: string
  end: string
  member: User
  status: VacationStatus
}

export enum VacationStatus {
  'WAITING',
  'OK',
  'REJECTED',
}
