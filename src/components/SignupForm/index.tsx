import { TextField, useTheme, MenuItem, Select, Button } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import * as S from './styled'
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm, Controller } from 'react-hook-form'
import Title from '../Title'
import { useEffect, useState } from 'react'
import { dayjsInstance } from '../../util'

function SignupForm() {
  const theme = useTheme()

  const [previewURL, setPreviewURL] = useState('')

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data })
    // data
  }
  const onInvalid: SubmitErrorHandler<FieldValues> = (error) => {
    const joiningDay = getValues('joiningDay')
    const birthDate = getValues('birthDate')

    console.log('입사년월: ', dayjsInstance(joiningDay).toDate())
    console.log('생일: ', dayjsInstance(birthDate).toDate())

    console.log({ error })
  }
  const departments = [
    {
      value: 'Development',
      label: '개발',
    },
    {
      value: '마케팅',
      label: '마케팅',
    },
    {
      value: '영업',
      label: '영업',
    },
    {
      value: '인사',
      label: '인사',
    },
  ]
  const positions = [
    {
      value: 'DEPARTMENT_MANAGER',
      label: '부장',
    },
    {
      value: 'DEPUTY_GENERAL_MANAGER',
      label: '차장',
    },
    {
      value: 'MANAGER',
      label: '과장',
    },
    {
      value: 'ASSISTANT_MANAGER',
      label: '대리',
    },
    {
      value: 'STAFF',
      label: '사원',
    },
  ]

  useEffect(() => {
    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL)
    }
  }, [])

  useEffect(() => {
    const subscription = watch(({ phoneNumber }, { name, type }) => {
      if (name !== 'phoneNumber') return

      if (phoneNumber.length === 3) {
        setValue('phoneNumber', phoneNumber + '-')
        return
      }

      if (phoneNumber.length === 8) {
        setValue('phoneNumber', phoneNumber + '-')
        return
      }
    })
    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <form id="test" onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <div style={{ paddingLeft: '72px' }}>
        <Title text="회원가입" />
      </div>
      <S.SignUpWrapper>
        <S.BasicInfoWrapper>
          <S.BasicInfo>기본 정보</S.BasicInfo>
          <S.BasicInfoFieldWrapper>
            <S.InfoFieldLeft>
              <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '5px' }}>
                  <label htmlFor="username" style={{ fontWeight: '600', minWidth: '42px' }}>
                    아이디
                  </label>
                  <TextField
                    id="username"
                    variant="outlined"
                    placeholder="숫자와 영어로 조합된 8-16문자"
                    size="small"
                    {...register('username', {
                      required: '아이디는 필수 입력항목입니다',
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
                <S.IdCheck type="button">중복확인</S.IdCheck>
              </div>
              {errors?.username ? <span style={{ color: 'red' }}>{errors?.username.message as string}</span> : null}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '5px 5px 5px 19px' }}>
                <label htmlFor="name" style={{ fontWeight: '600', minWidth: '27.4px' }}>
                  이름
                </label>
                <TextField
                  id="name"
                  variant="outlined"
                  placeholder="2~4자의 한글 이름을 입력해주세요"
                  size="small"
                  {...register('name', {
                    required: '이름은 필수 입력항목입니다',
                    minLength: { value: 2, message: '2자에서 4자 사이입니다' },
                    maxLength: { value: 4, message: '2자에서 4자 사이입니다' },
                    pattern: { value: /^[가-힣]*$/, message: '한글만 입력 가능합니다' },
                  })}
                  sx={{
                    width: '300px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />
              </div>
              {errors?.name ? <span style={{ color: 'red' }}>{errors?.name.message as string}</span> : null}
            </S.InfoFieldLeft>
            <S.InfoFieldRight>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '5px 5px 5px 36px' }}>
                <label htmlFor="user-password" style={{ fontWeight: '600', minWidth: '56px' }}>
                  비밀번호
                </label>
                <TextField
                  id="user-password"
                  variant="outlined"
                  size="small"
                  type="password"
                  placeholder="숫자와 영어로 조합된 6-20문자"
                  {...register('password', {
                    required: '비밀번호는 필수 입력항목입니다',
                    minLength: { value: 6, message: '6자에서 20자 사이입니다' },
                    maxLength: { value: 20, message: '6자에서 20자 사이입니다' },
                    pattern: { value: /^[a-zA-Z0-9]*$/, message: '영문과 숫자만 입력 가능합니다' },
                  })}
                  sx={{
                    width: '300px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />
              </div>
              {errors?.password ? <span style={{ color: 'red' }}>{errors?.password.message as string}</span> : null}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '5px' }}>
                <label htmlFor="user-id" style={{ fontWeight: '600', minWidth: '86.7px' }}>
                  비밀번호 확인
                </label>
                <TextField
                  id="user-password-remind"
                  variant="outlined"
                  size="small"
                  type="password"
                  {...register('passwordRemind', {
                    required: '비밀번호 확인을 입력해 주세요',
                    validate: {
                      isEqualPassword: () => {
                        return getValues('password') === getValues('passwordRemind')
                          ? true
                          : '패스워드와 일치하지 않습니다.'
                      },
                    },
                  })}
                  sx={{
                    width: '300px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />
              </div>
              {errors?.passwordRemind ? (
                <span style={{ color: 'red' }}>{errors?.passwordRemind.message as string}</span>
              ) : null}
            </S.InfoFieldRight>

            {/* <div style={{ backgroundColor: 'yellow', flex: '1', flexBasis: '50%' }}>1</div> */}
          </S.BasicInfoFieldWrapper>
        </S.BasicInfoWrapper>
        <S.EmployeeInfoWrapper>
          <S.EmployeeInfo>사원 정보</S.EmployeeInfo>
          <S.EmployeeFieldWrapper>
            <S.EmployeeFieldLeft>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '5px' }}>
                <label htmlFor="email" style={{ fontWeight: '600', minWidth: '42px' }}>
                  이메일
                </label>
                <TextField
                  id="email"
                  variant="outlined"
                  size="small"
                  {...register('email', {
                    required: '이메일은 필수 입력항목입니다',

                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '올바른 email형식이 아닙니다' },
                  })}
                  sx={{
                    width: '380px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />
              </div>
              {errors?.email ? <span style={{ color: 'red' }}>{errors?.email.message as string}</span> : null}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '5px 5px 5px 19px' }}>
                <label htmlFor="departmentName" style={{ fontWeight: '600', minWidth: '27.4px' }}>
                  부서
                </label>
                <Select
                  id="departmentName"
                  size="small"
                  // defaultValue="개발"
                  {...register('departmentName', {
                    required: '부서를 선택해주세요',
                  })}
                  sx={{
                    width: '380px',
                    backgroundColor: theme.app.palette.white,
                  }}
                >
                  {departments.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              {errors?.departmentName ? (
                <span style={{ color: 'red' }}>{errors?.departmentName.message as string}</span>
              ) : null}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '5px',
                }}
              >
                <label htmlFor="email" style={{ fontWeight: '600', minWidth: '42px' }}>
                  프로필사진
                </label>
                <TextField
                  id="email"
                  variant="outlined"
                  size="small"
                  {...register('email', {
                    required: '이메일은 필수 입력항목입니다',

                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '올바른 email형식이 아닙니다' },
                  })}
                  sx={{
                    width: '380px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />

                <Button
                  variant="contained"
                  component="label"
                  style={{ backgroundColor: theme.app.palette.green1, fontSize: theme.app.size.font.medium }}
                >
                  파일선택
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => {
                      if (previewURL) URL.revokeObjectURL(previewURL)

                      const file = e.target.files?.item(0)

                      const url = URL.createObjectURL(file as Blob)

                      setPreviewURL(url)
                    }}
                  />
                </Button>
                {previewURL ? (
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: theme.app.palette.gray1,
                    }}
                  >
                    <img style={{ width: '100%' }} src={previewURL} alt="profile" />
                  </div>
                ) : null}
              </div>
            </S.EmployeeFieldLeft>
            <S.EmployeeFieldRight>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '5px 5px 5px 13px' }}>
                <label htmlFor="email" style={{ fontWeight: '600', minWidth: '42px' }}>
                  연락처
                </label>
                <TextField
                  id="phoneNumber"
                  variant="outlined"
                  size="small"
                  placeholder="010-1234-1234"
                  {...register('phoneNumber', {
                    required: '연락처는 필수 입력항목입니다',
                    // minLength: { value: 13, message: '11개의 숫자를 입력하세요' },
                    // maxLength: { value: 13, message: '11개의 숫자를 입력하세요' },
                    pattern: { value: /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/, message: '숫자만 입력 가능합니다' },
                  })}
                  sx={{
                    width: '380px',
                    backgroundColor: theme.app.palette.white,
                  }}
                />
              </div>
              {errors?.phoneNumber ? (
                <span style={{ color: 'red' }}>{errors?.phoneNumber.message as string}</span>
              ) : null}

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '5px 5px 5px 0' }}>
                <label htmlFor="joinDate" style={{ fontWeight: '600', minWidth: '42px' }}>
                  입사년월
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    name="joiningDay"
                    control={control}
                    rules={{ required: '입사년월은 필수 입력항목입니다' }}
                    render={({ field: { ref, ...rest } }) => <DatePicker {...rest} />}
                  />
                </LocalizationProvider>
              </div>
              {errors?.joiningDay ? <span style={{ color: 'red' }}>{errors?.joiningDay.message as string}</span> : null}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '5px 5px 5px 0px' }}>
                <label htmlFor="email" style={{ fontWeight: '600', minWidth: '42px' }}>
                  생년월일
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    name="birthDate"
                    control={control}
                    rules={{ required: '생일은 필수 입력항목입니다' }}
                    render={({ field: { ref, ...rest } }) => <DatePicker {...rest} />}
                  />
                </LocalizationProvider>
              </div>
              {errors?.birthDate ? <span style={{ color: 'red' }}>{errors?.birthDate.message as string}</span> : null}

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '5px 5px 5px 28px' }}>
                <label htmlFor="positionName" style={{ fontWeight: '600', minWidth: '27.4px' }}>
                  직급
                </label>
                <Select
                  id="positionName"
                  size="small"
                  defaultValue="STAFF"
                  {...register('positionName', {
                    required: '직급을 선택해주세요',
                  })}
                  sx={{
                    width: '380px',
                    backgroundColor: theme.app.palette.white,
                  }}
                >
                  {positions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <S.SubmitBtn>가입하기</S.SubmitBtn>
            </S.EmployeeFieldRight>
          </S.EmployeeFieldWrapper>
        </S.EmployeeInfoWrapper>
      </S.SignUpWrapper>
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
