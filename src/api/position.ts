import { instance } from './instance'

export const getPositions = async () => {
  const res = await instance.get('/api/v1/position/list')
  console.log(res)
  return res.data
}

export const registrationPosition = async (position: { positionName: string; vacation: string }) => {
  const res = await instance.post('/api/v1/position/save', position)
  console.log(res)
  return res.data
}

export const getPosition = async (positionName: string) => {
  const res = await instance.get(`/api/v1/position/detail/${positionName}`)
  console.log(res)
  return res.data
}

export const editPosition = async (positionName: string, vacation: { vacation: string }) => {
  const res = await instance.post(`/api/v1/position/modify/${positionName}`, vacation)
  console.log(res)
  return res.data
}

export const deletePosition = async (positionName: string) => {
  const res = await instance.get(`/api/v1/position/detail/${positionName}`)
  console.log(res)
  return res.data
}
