import { VacationEntity } from '../vacation'

export interface CreateVacationRequestDto
  extends Pick<VacationEntity, 'username' | 'start' | 'end' | 'deleted' | 'status'> {}
