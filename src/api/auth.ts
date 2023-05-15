import { LoginRequestDto } from '../types/Dto/loginRequest.dto'
import { ApiResponse } from '../types/response'
import { API_URL } from './constants'
import { instance } from './instance'

export const login = async (loginForm: LoginRequestDto) => {
  const res = await instance.post<ApiResponse>(API_URL.v1.login, {
<<<<<<< HEAD
    username: loginForm.email,
=======
    username: loginForm.username,
>>>>>>> 6a2bcb45096c1ede3b6b4545d7775aba5cb8b5db
    password: loginForm.password,
  })

  return res.data
}
