import { TextField } from '@mui/material'
import * as S from './styled'
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import Title from '../Title'

function SignupForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data })
  }
  const onInvalid: SubmitErrorHandler<FieldValues> = (error) => {
    console.log({ error })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <Title text="회원가입" />
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <label htmlFor="user-id" style={{ fontWeight: '700' }}>
          ID
        </label>
        <TextField
          id="user-id"
          variant="outlined"
          placeholder="숫자와 영어로 조합된 8-16글자"
          {...register('username', {
            required: 'username is required',
            minLength: { value: 8, message: '8자에서 16자 사이입니다' },
            maxLength: { value: 16, message: '8자에서 16자 사이입니다' },
            pattern: { value: /^[a-zA-Z]*$/, message: '영문만 입력 가능합니다' },
          })}
          sx={{
            width: '380px',
          }}
        />
      </div>
    </form>
  )
}
export default SignupForm
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

/*
          회원가입
      <label htmlFor="user-id">아이디</label>
      <TextField
        id="user-id"
        className="IdInput"
        variant="outlined"
        placeholder="숫자와 영어로 조합된 8-16글자"
        {...register('username', {
          required: 'username is required',
          minLength: { value: 8, message: '8자에서 16자 사이입니다' },
          maxLength: { value: 16, message: '8자에서 16자 사이입니다' },
          pattern: { value: /^[a-zA-Z]*$/, message: '영문만 입력 가능합니다' },
        })}
      />
      <S.IdCheck>중복확인</S.IdCheck>
      <TextField
        label="name"
        variant="outlined"
        {...register('name', {
          required: 'username is required',
          pattern: { value: /^[a-zA-Z]{8,16}$/, message: '8~16자 사이...' },
        })}
      />
      <TextField label="Passwordr" variant="outlined" {...register('password', { required: 'password is required' })} />
      <S.SignUpBtn variant="outlined">submit</S.SignUpBtn>
      {/* <button>submit</button>
*/
