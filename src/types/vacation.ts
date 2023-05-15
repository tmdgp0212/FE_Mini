import { BaseEntity } from './common'

export interface VacationEntity {
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
