import { rest } from 'msw'
<<<<<<< HEAD
import { API_URL } from '../../api/constants'
import { jwtDecode } from '../../util/jwt'
import { mockUserList } from '../db'
import { removeCookie } from '../../util'
=======
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
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053

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
