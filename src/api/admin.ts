import { instance } from './instance'

export const getVacation = async () => {
  const res = await instance.get(`/vacation/list/0`)
  return res.data
}

export const getDuty = async () => {
  const res = await instance.get(`/duty/list/0`)
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

export const getSignUp = async () => {
  const res = await instance.get(`/member/admin/deactivation/list`)
  return res.data
}

export const acceptSignUp = async (username: string) => {
  const res = await instance.post(`/member/admin/active`, { username, memberStatus: 'ACTIVATION' })
  return res.data
}
export const rejectSignUp = async (username: string) => {
  const res = await instance.post(`/member/admin/active`, { username, memberStatus: 'DEACTIVATION' })
  return res.data
}
