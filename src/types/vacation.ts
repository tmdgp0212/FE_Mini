import { BaseEntity } from './common'

export interface VacationEntity {
  id: number
  name: string
  start: string
  end: string
  deleted: boolean
  status: VacationStatus
}

export enum VacationStatus {
  'WAITING',
  'OK',
  'REJECTED',
}
