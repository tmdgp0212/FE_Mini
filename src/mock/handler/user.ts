import { rest } from 'msw'
import { API_URL } from '../../api/constants'
import { jwtDecode } from '../../util/jwt'
import { mockUserList } from '../db'
import { removeCookie } from '../../util'

export const userHandler = [
  rest.get(API_URL.v1.search, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: '',
        data: true,
      }),
    )
  }),
  rest.get(API_URL.v1.getUserDetail, (req, res, ctx) => {
    const accessToken = req.cookies?.accessToken

    const decoded = jwtDecode(accessToken)

    if (!accessToken || !decoded) {
      return res(ctx.status(401), ctx.json({ status: 401, message: 'token is null or too short', data: false }))
    }

    const user = mockUserList.find((user) => user.username === decoded?.username)

    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: 'success',
        data: {
          ...user,
        },
      }),
    )
  }),
  rest.post(API_URL.v1.signup, async (req, res, ctx) => {
    const body = await req.json()

    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: '',
        data: true,
      }),
    )
  }),
  rest.post('/api/v1/member/modify', async (req, res, ctx) => {
    const body = await req.json()

    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: '',
        data: true,
      }),
    )
  }),
]
