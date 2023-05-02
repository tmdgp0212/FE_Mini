import TextField from '@mui/material/TextField'
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { getCookie } from '../../util/cookies'
import { useTheme } from '@mui/material'
import Button from '../Button'

function LoginForm() {
  const theme = useTheme()
  const { register, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data })
  }

  const onInvalid: SubmitErrorHandler<FieldValues> = (error) => {
    console.log({ error })
  }

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <TextField variant="outlined" {...register('username', { required: 'username is required' })} />
      <TextField type="password" variant="outlined" {...register('password', { required: 'password is required' })} />
      <Button type="submit" variant="contained" bg={theme.app.palette.green1} fontColor={theme.app.palette.white}>
        Login
      </Button>
    </form>
  )
}

export default LoginForm
