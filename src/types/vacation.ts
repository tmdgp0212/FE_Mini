import { BaseEntity } from './common'

export interface VacationTempEntity extends BaseEntity {
  username: string
  start: string
  end: string
  deleted: boolean
  status: VacationStatus
}

export interface VacationEntity extends VacationTempEntity {}

export enum VacationStatus {
  'WATING',
  'OK',
  'REJECTED',
}
