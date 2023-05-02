import { rest } from 'msw'
import { ApiResponse } from '../../types/response'
import { userHandler } from './user'
import { vacationHandler } from './vacation'

export const handler = [...userHandler, ...vacationHandler]
