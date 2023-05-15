import { User } from './user'

export interface Vacation {
  id: number
  memberName: string
  start: string
  end: string
  status: VacationStatus
  departmentName: string
}

export enum VacationStatus {
  'WAITING',
  'OK',
  'REJECTED',
}
