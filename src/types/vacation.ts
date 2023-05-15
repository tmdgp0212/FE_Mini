import { User } from './user'

export interface Vacation {
  id: number
<<<<<<< HEAD
  start: string
  end: string
  member: User
=======
  memberName: string
  start: string
  end: string
>>>>>>> 271d6a22964a34eeef2e58b7ec0075f78fcaf803
  status: VacationStatus
  departmentName: string
}

export enum VacationStatus {
  'WAITING',
  'OK',
  'REJECTED',
}
