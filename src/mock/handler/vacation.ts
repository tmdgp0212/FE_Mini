import { rest } from 'msw'

export const vacationHandler = [
  rest.get('/api/v1/vacation/detail/:id', (req, res, ctx) => {
    const parmas = req.params

    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: '',
        data: true,
      }),
    )
  }),
  rest.get('/api/v1/vacation/delete/:id', (req, res, ctx) => {
    const parmas = req.params

    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: '',
        data: true,
      }),
    )
  }),
  rest.get('/api/v1/vacation/list', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: '',
        data: true,
      }),
    )
  }),
  rest.post('/api/v1/vacation/save', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: '',
        data: true,
      }),
    )
  }),
  rest.post('/api/v1/vacation/modify/:id', async (req, res, ctx) => {
    const parmas = req.params

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
  rest.post('/api/v1/vacation/ok/:id', async (req, res, ctx) => {
    const accessToken = req.headers.get('Authorization')?.split(' ')[1]

    const parmas = req.params

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
