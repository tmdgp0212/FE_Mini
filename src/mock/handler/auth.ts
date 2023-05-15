import { rest } from 'msw'
import { API_URL } from '../../api/constants'
import { mockUserList } from '../db'
import { registerAccessToken, registerRefreshToken } from '../../util/jwt'

export const authHandler = [
  rest.post(API_URL.v1.login, async (req, res, ctx) => {
    const { username, password } = await req.json()

    if (!(username && password)) {
      return res(
        ctx.status(401),
        ctx.json({
          status: 401,
          message: 'fail',
          data: false,
        }),
      )
    }

    const user = mockUserList.find((user) => user.username === username)

    if (!user)
      return res(
        ctx.status(404),
        ctx.json({
          status: 404,
          message: 'fail',
          data: false,
        }),
      )

    const userPayload = {
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
      department: user.department,
      position: user.position,
      fileName: user.fileName,
    }

    const accessToken = await registerAccessToken(userPayload)
    const refreshToken = await registerRefreshToken(userPayload)

    return res(
      ctx.status(200),
      ctx.set({ Authorization: `Bearer ${accessToken}`, 'X-Auth-Refresh-Token': `Bearer ${refreshToken}` }),
      ctx.json({
        status: 200,
        message: 'success',
        data: true,
      }),
    )
  }),
]
