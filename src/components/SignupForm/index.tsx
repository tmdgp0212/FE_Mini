import { TextField, useTheme } from '@mui/material'
import * as S from './styled'
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import Title from '../Title'

function SignupForm() {
  const theme = useTheme()

  const { register, handleSubmit, getValues } = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data })
  }
  const onInvalid: SubmitErrorHandler<FieldValues> = (error) => {
    console.log({ error })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <Title text="회원가입" />
      <S.SignUpWrapper>
        <S.BasicInfoWrapper>
          <S.BasicInfo>기본 정보</S.BasicInfo>
          <S.BasicInfoFieldWrapper>
            <div style={{ display: 'flex', flex: '1', flexBasis: '50%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <label htmlFor="user-id" style={{ fontWeight: '600', minWidth: '42px' }}>
                  아이디
                </label>
                <TextField
                  id="user-id"
                  variant="outlined"
                  placeholder="숫자와 영어로 조합된 8-16문자"
                  size="small"
                  {...register('username', {
                    required: 'username is required',
                    minLength: { value: 8, message: '8자에서 16자 사이입니다' },
                    maxLength: { value: 16, message: '8자에서 16자 사이입니다' },
                    pattern: { value: /^[a-zA-Z0-9]*$/, message: '영문과 숫자만 입력 가능합니다' },
                  })}
                  sx={{
                    width: '300px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />
              </div>
              <S.IdCheck>중복확인</S.IdCheck>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingLeft: '14px' }}>
                <label htmlFor="user-id" style={{ fontWeight: '600', minWidth: '27.4px' }}>
                  이름
                </label>
                <TextField
                  id="name"
                  variant="outlined"
                  placeholder="2~4자의 한글 이름을 입력해주세요"
                  size="small"
                  {...register('name', {
                    required: 'name is required',
                    minLength: { value: 2, message: '2자에서 4자 사이입니다' },
                    maxLength: { value: 4, message: '2자에서 4자 사이입니다' },
                    pattern: { value: /^[가-힣]*$/, message: '한글만 입력 가능합니다' },
                  })}
                  sx={{
                    width: '380px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />
              </div>
            </div>
            {/* <div style={{ backgroundColor: 'yellow', flex: '1', flexBasis: '50%' }}>1</div> */}
          </S.BasicInfoFieldWrapper>
        </S.BasicInfoWrapper>
      </S.SignUpWrapper>
      <button>submit</button>
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

/*

<div
              style={{
                display: 'flex',
                paddingBottom: '15px',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <label htmlFor="user-id" style={{ fontWeight: '600', minWidth: '42px' }}>
                    아이디
                  </label>
                  <TextField
                    id="user-id"
                    variant="outlined"
                    placeholder="숫자와 영어로 조합된 8-16문자"
                    size="small"
                    {...register('username', {
                      required: 'username is required',
                      minLength: { value: 8, message: '8자에서 16자 사이입니다' },
                      maxLength: { value: 16, message: '8자에서 16자 사이입니다' },
                      pattern: { value: /^[a-zA-Z0-9]*$/, message: '영문과 숫자만 입력 가능합니다' },
                    })}
                    sx={{
                      width: '380px',
                      backgroundColor: theme.app.palette.white,
                    }}
                  />
                </div>
                <S.IdCheck>중복확인</S.IdCheck>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <label htmlFor="user-password" style={{ fontWeight: '600', minWidth: '56px' }}>
                  비밀번호
                </label>
                <TextField
                  id="user-password"
                  variant="outlined"
                  size="small"
                  placeholder="숫자와 영어로 조합된 6-20문자"
                  {...register('password', {
                    required: 'password is required',
                    minLength: { value: 6, message: '6자에서 20자 사이입니다' },
                    maxLength: { value: 20, message: '6자에서 20자 사이입니다' },
                    pattern: { value: /^[a-zA-Z0-9]*$/, message: '영문과 숫자만 입력 가능합니다' },
                  })}
                  sx={{
                    width: '380px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingLeft: '14px' }}>
                <label htmlFor="user-id" style={{ fontWeight: '600', minWidth: '27.4px' }}>
                  이름
                </label>
                <TextField
                  id="name"
                  variant="outlined"
                  placeholder="2~4자의 한글 이름을 입력해주세요"
                  size="small"
                  {...register('name', {
                    required: 'name is required',
                    minLength: { value: 2, message: '2자에서 4자 사이입니다' },
                    maxLength: { value: 4, message: '2자에서 4자 사이입니다' },
                    pattern: { value: /^[가-힣]*$/, message: '한글만 입력 가능합니다' },
                  })}
                  sx={{
                    width: '380px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <label htmlFor="user-id" style={{ fontWeight: '600', minWidth: '86.7px' }}>
                  비밀번호 확인
                </label>
                <TextField
                  id="user-password-remind"
                  variant="outlined"
                  size="small"
                  // placeholder="2~4자의 한글 이름을 입력해주세요"
                  {...register('password-remind', {
                    required: 'password-remind is required',
                    validate: {
                      isEqualPassword: () => {
                        return getValues('password') === getValues('password-remind')
                          ? true
                          : '패스워드와 일치하지 않습니다.'
                      },
                    },
                  })}
                  sx={{
                    width: '380px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />
              </div>
            </div>

*/
