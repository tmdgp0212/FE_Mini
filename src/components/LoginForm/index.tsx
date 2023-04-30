import { TextField } from '@mui/material'
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { getCookie } from '../../util/cookies'

function LoginForm() {
  const { register, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data })
  }

  const onInvalid: SubmitErrorHandler<FieldValues> = (error) => {
    console.log({ error })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      Login Form
      <TextField label="Username" variant="outlined" {...register('username', { required: 'username is required' })} />
      <TextField label="Passwordr" variant="outlined" {...register('password', { required: 'password is required' })} />
      <button>submit</button>
    </form>
  )
}

export default LoginForm
