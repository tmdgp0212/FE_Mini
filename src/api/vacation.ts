import { VacationEntity } from '../types/vacation'
import { instance } from './instance'

export const getVacation = async (month: number) => {
  const res = await instance.get<VacationEntity[]>(`/api/v1/vacation/list/${month}`)
  return res.data
}
