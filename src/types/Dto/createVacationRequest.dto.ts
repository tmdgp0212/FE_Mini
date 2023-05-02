import { VacationTempEntity } from '../vacation'

export interface CreateVacationRequestDto
  extends Pick<VacationTempEntity, 'username' | 'start' | 'end' | 'deleted' | 'status'> {}
