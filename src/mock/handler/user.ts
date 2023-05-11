import { rest } from 'msw'
import User from '../user.json'

const user: unknown[] = []

export interface SignupRequestForm {
  username: string
  password: string
  fileName?: string
  departmentName: string
  positionName: string
  phoneNumber: string
  name: string
  email: string
  birthDate: Date
  joiningDay: Date
}

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
  rest.get('/api/v1/join/check', (req, res, ctx) => {
    const checkTestUserList = [{ username: 'jung1234' }, { username: 'oyster1234' }]

    const usernameQuery = req.url.search.split('?')[1].split('=')[1]

    console.log({ usernameQuery, search: req.url.searchParams })

    const isExistUsername = checkTestUserList.some((testUser) => testUser.username === usernameQuery)

    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: 'success',
        data: isExistUsername ? true : false,
      }),
    )
  }),
  rest.get('/api/v1/join', async (req, res, ctx) => {
    const contentType = req.headers.get('Content-Type')

    return res(
      ctx.status(200),
      ctx.json({
        status: 201,
        message: 'success',
        data: true,
      }),
    )
  }),
  rest.post('/api/v1/temp/upload', async (req, res, ctx) => {
    const body = req.body

    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: 'success',
        data: body.fileNames.name,
      }),
    )
  }),
]
