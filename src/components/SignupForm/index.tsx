import { TextField } from '@mui/material'

import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

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
      Signup Form
      <TextField
        label="username"
        variant="outlined"
        {...register('username', {
          required: 'username is required',
          minLength: { value: 8, message: '8자에서 16자 사이입니다' },
          maxLength: { value: 16, message: '8자에서 16자 사이입니다' },
          pattern: { value: /^[a-zA-Z]*$/, message: '영문만 입력 가능합니다' },
        })}
      />
      <TextField
        label="name"
        variant="outlined"
        {...register('name', {
          required: 'username is required',
          pattern: { value: /^[a-zA-Z]{8,16}$/, message: '8~16자 사이...' },
        })}
      />
      <TextField label="Passwordr" variant="outlined" {...register('password', { required: 'password is required' })} />
      <button>submit</button>
    </form>
  )
}

export default LoginForm

/*
  validate: {
            isContainSpace: (value: string) => {
              if (/\s/g.exec(value)) return '공백은 포함될 수 없습니다.'
            },
            inValidLength: (value: string) => {
              if (!(value.length >= 2 && value.length <= 4)) return '최소 2자이상,4자 이하입니다.'
            },
            inValidFormat: (value: string) => {
              if (!/^[가-힣]*$/.exec(value)) return '한글만 입력 가능합니다'
            },
          },

*/
