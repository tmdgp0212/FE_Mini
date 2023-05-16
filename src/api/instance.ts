import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { getCookie } from '../util/cookies'

const getInstance = () => {
  const instance = axios.create({
    baseURL: 'http://3.38.103.48:8080/',
    // headers: {
    //   Authorization: ''
    // },
    withCredentials: true,
  })

  const TIMEOUTERROR_MESSAGE = 'timeout'

  // instance.defaults.timeout = 5000
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
  return res
}

function handleIntercepterError(error: AxiosError) {
  if (error?.code === AxiosError.ECONNABORTED) {
    return Promise.reject({ ok: false, error: { message: instance.defaults.timeoutErrorMessage } })
  }
  return Promise.reject(error)
}
