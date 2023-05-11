import { rest } from 'msw'
import User from '../user.json'

const user: unknown[] = []

export const userHandler = [
  rest.get('/api/v1/member/search', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: '',
        data: true,
      }),
    )
  }),
  rest.get('/api/v1/members/detail', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: 'success',
        data: User[0],
      }),
    )
  }),
  rest.post('/api/v1/join', async (req, res, ctx) => {
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
  rest.post('/api/v1/loginTest', async (req, res, ctx) => {
    const body = await req.json()

    const testJWT =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
      'eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTUxNjIzOTAyMn0.' +
      'lI7kQCfzQVDjl5WZaApceqqWwlEsKbL4-ECONjArLBE'

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
