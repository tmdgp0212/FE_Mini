export interface Vacation {
  id: number
  memberName: string
<<<<<<< HEAD
  start: string
  end: string
  status: VacationStatus
  departmentName: string
=======
  departmentName: string
  start: string
  end: string
  status: VacationStatus
  createdAt?: string
}

export interface Duty {
  id: number
  membername: string
  day: string
  status: VacationStatus
  departmentName: string
  createdAt: string
>>>>>>> 6a2bcb45096c1ede3b6b4545d7775aba5cb8b5db
}

export enum VacationStatus {
  'WAITING' = 'WAITING',
  'OK' = 'OK',
  'REJECTED' = 'REJECTED',
}
