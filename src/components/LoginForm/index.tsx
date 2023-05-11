import TextField from '@mui/material/TextField'
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { getCookie, setCookie } from '../../util/cookies'
import { useTheme } from '@mui/material'
import Button from '../Button'
import * as S from './style'
import { instance } from '../../api/instance'
import { jwtDecode } from '../../util/jwt'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useToast } from '../../hooks'
import { LoginRequestDto } from '../../types/Dto/loginRequest.dto'
import { login } from '../../api/auth'
import { UserActionPayload, setUser, useAccessTokenInfo } from '../../store/slices/userSlice'
import { UserPayload } from '../../types/user'

function LoginForm() {
  const theme = useTheme()
  const { dispatch } = useAccessTokenInfo()

  const queryClient = useQueryClient()

  const { showToast } = useToast('등록된 아이디가 아니거나 일치하는 유저가 없습니다')

  const { mutate } = useMutation((loginForm: LoginRequestDto) => login(loginForm), {
    onSuccess: (_) => {
      const token = getCookie('accessToken')

      console.log('login success: ', token)

      dispatch(setUser(jwtDecode(token) as UserActionPayload))
    },
    onError: (_) => showToast(),
  })

  const { register, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log({ data })

    mutate({ email: data?.email, password: data?.password })
  }

  const onInvalid: SubmitErrorHandler<FieldValues> = (error) => {
    console.log({ error })
  }

  return (
<<<<<<< HEAD
    <form style={{ display: 'flex', marginLeft: '20px', gap: '12px' }} onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <S.InputGroup>
        <label htmlFor="user-email">ID</label>
        <S.TextInput
          id="user-email"
          size="small"
          variant="outlined"
          {...register('email', { required: 'username is required' })}
        />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="user-password">PW</label>
        <S.TextInput
          id="user-password"
          size="small"
          type="password"
          variant="outlined"
          {...register('password', { required: 'password is required' })}
        />
      </S.InputGroup>
      <Button
        type="submit"
        variant="contained"
        bg={theme.app.palette.green1}
        fontcolor={theme.app.palette.white}
        style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}
      >
=======
    <form style={{ display: 'flex' }} onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <TextField variant="outlined" {...register('username', { required: 'username is required' })} />
      <TextField type="password" variant="outlined" {...register('password', { required: 'password is required' })} />
      <Button type="submit" variant="contained" bg={theme.app.palette.green1} fontcolor={theme.app.palette.white}>
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053
        Login
      </Button>
    </form>
  )
}

export default LoginForm
