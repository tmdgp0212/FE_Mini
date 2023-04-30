import { rest } from 'msw'
import { ApiResponse } from '../../types/response'

export const handler = [
  rest.get('/test', (req, res, ctx) => {
    return res(
      ctx.json<ApiResponse>({
        status: 200,
        message: 'success',
        data: true,
      }),
    )
  }),
]
