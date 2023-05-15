import { instance } from './instance'
import { ConfirmRegisterReq, ModifyUserReq, RoleMutateReq, SearchUserReq } from './type'

export const modifyUser = async (modifiedUser: ModifyUserReq) => {
  const res = await instance.post('/api/v1/member/admin/modify', modifiedUser)
  return res.data
}

export const changeRole = async (data: RoleMutateReq) => {
  const res = await instance.post('/api/v1/member/admin/role/modify', data)
  return res.data
}

export const searchUser = async ({ type, keyword, page }: SearchUserReq) => {
  const res = await instance.get(`/api/v1/member/page/search?text=${type}&keyword=${keyword}&page=${page}&size=10`)
  return res.data
}

export const registerConfirm = async (username: string) => {
  const res = await instance.post('/api/v1/member/admin/modify', {
    username,
    memberStatus: 'ACTIVATION',
  } as ConfirmRegisterReq)
  return res.data
}
