export interface DutyEntity {
  id: number
  name: string
  day: string
  deleted: boolean
  status: DutyStatus
}

export enum DutyStatus {
  'WAITING',
  'OK',
  'REJECTED',
}
