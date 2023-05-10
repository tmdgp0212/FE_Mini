import { instance } from './instance'

export const getVacation = async () => {
  const res = await instance.get(`/vacation/list`)
  return res.data
}

export const getDuty = async () => {
  const res = await instance.get(`/duty/list`)
  return res.data
}

export const acceptVacation = async (id: string) => {
  const res = await instance.post(`/vacation/ok/${id}`)
  return res.data
}

export const rejectVacation = async (id: string) => {
  const res = await instance.post(`/vacation/rejected/${id}`)
  return res.data
}

export const acceptDuty = async (id: string) => {
  const res = await instance.post(`/duty/ok/${id}`)
  return res.data
}

export const rejectDuty = async (id: string) => {
  const res = await instance.post(`/duty/rejected/${id}`)
  return res.data
}
