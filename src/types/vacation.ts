export interface Vacation {
  id: number
  memberName: string
  departmentName: string
  start: string
  end: string
  status: VacationStatus
}

export enum VacationStatus {
  'WAITING' = 'WAITING',
  'OK' = 'OK',
  'REJECTED' = 'REJECTED',
}
