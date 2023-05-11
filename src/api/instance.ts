import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { getCookie, setCookie } from '../util/cookies'
import { API_URL } from './constants'
import { getTokensFromResponse } from './util'
import { jwtDecode } from '../util/jwt'

const getInstance = () => {
  const instance = axios.create({
    withCredentials: true,
  })

  const TIMEOUTERROR_MESSAGE = 'timeout'

  instance.defaults.timeout = 5000
  instance.defaults.timeoutErrorMessage = TIMEOUTERROR_MESSAGE

  instance.interceptors.request.use(handleRequest)

  instance.interceptors.response.use(handleResponse, handleIntercepterError)

  return instance
}

export const instance = getInstance()

function handleRequest(req: InternalAxiosRequestConfig<any>) {
  const accessToken = getCookie('accessToken')

  if (accessToken) {
    req.headers['Authorization'] = `Bearer ${accessToken}`
  }

  return req
}

function handleResponse(res: AxiosResponse<any, any>) {
  if (res.config.url === 'http://52.78.232.110:9090' + API_URL.v1.login) {
    const { accessToken } = getTokensFromResponse(res)

    const decodedAccessToken = jwtDecode(accessToken)
    // const decodedRefreshToken = jwtDecode(refreshToken)

    setCookie('accessToken', accessToken, {
      path: '/',
      maxAge: Number(decodedAccessToken?.exp) - Number(decodedAccessToken?.iat),
    })
    // setCookie('refreshToken', refreshToken, {
    //   path: '/',
    //   maxAge: Number(decodedRefreshToken?.exp) - Number(decodedRefreshToken?.iat),
    // })
  }

  return res
}

function handleIntercepterError(error: AxiosError) {
  if (error?.code === AxiosError.ECONNABORTED) {
    return Promise.reject({ ok: false, error: { message: instance.defaults.timeoutErrorMessage } })
  }
  return Promise.reject(error)
}
