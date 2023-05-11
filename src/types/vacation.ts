import { User } from './user'

<<<<<<< HEAD
export interface Vacation {
  id: number
=======
export interface VacationEntity {
  id: number
  name: string
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053
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
