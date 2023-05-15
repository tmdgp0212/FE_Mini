import { AxiosResponse } from 'axios'

export const getTokensFromResponse = (res: AxiosResponse) => {
  const headers = res.headers

  const accessToken = headers['authorization']
<<<<<<< HEAD
  // const refreshToken = headers['x-auth-refresh-token']

  return {
    accessToken: accessToken ? (accessToken as string).split(' ')[1] : '',
    // refreshToken: refreshToken ? (refreshToken as string).split(' ')[1] : '',
=======

  return {
    accessToken: accessToken ? (accessToken as string).split(' ')[1] : '',
>>>>>>> 6a2bcb45096c1ede3b6b4545d7775aba5cb8b5db
  }
}
