import * as S from './style'
import MaterialButton from '@mui/material/Button'
import Button from '../../components/Button'
import Title from '../../components/Title'
import { Avatar, useTheme } from '@mui/material'
import { instance } from '../../api/instance'
import { useQuery } from '@tanstack/react-query'
import { UserRole } from '../../types/user'
import { useState } from 'react'

async function fetchUser() {
  const res = await instance.get('/api/v1/members/detail')

  return res.data.data
}

function EditProfile() {
  const theme = useTheme()
  const { data: user, status } = useQuery(['user', 1], fetchUser)
  const [isShown, setIsShown] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsShown((prev) => !prev)
    setIsClicked((prev) => !prev)
  }
  const [inputs, setInputs] = useState({ name: '', password: '', email: '' })
  const { name, phone, email, currentPassword, newPassword, checkPassword } = inputs
  const onChange = (e) => {
    const { name, value } = e.target

    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs)
  }
  const onReset = () => {
    const resetInputs = {
      name: '',
      phone: '',
      email: '',
      currentPassword: '',
      newPassword: '',
      checkPassword: '',
    }
    setInputs(resetInputs)
  }
  if (status === 'loading') return <></>
  if (status === 'error') return <>error</>

  return (
    <S.ProfilePage>
      <div
        style={{
          position: 'fixed',
          left: `calc(${theme.app.size.nav.width} + 40px)`,
          right: '40px',
          zIndex: '2',
          marginTop: '-40px',
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          fontSize: theme.app.size.font.title,
        }}
      >
        <Title text="내 정보  수정" />
      </div>

      <S.ProfilesContainer>
        <S.ProfileContainer>
          <S.Authority>권한:{UserRole[user.role]}</S.Authority>
          <Avatar alt="user-image" sx={{ width: 200, height: 200 }} src={user.fileName} />
          <S.UserDetailContainer>
            <S.Name>
              김아무개 <span>({user.username})</span>
            </S.Name>
            <S.Detail>{user.email}</S.Detail>
            <S.Detail>{user.phoneNumber}</S.Detail>
          </S.UserDetailContainer>
          <S.UserCompanyDetail>
            <S.Detail>사번:{user.employeeNumber}</S.Detail>
            <S.Detail>부서:{user.department}</S.Detail>
            <S.Detail>직급:{user.position}</S.Detail>
            <S.Detail>
              입사일(근속연수):{user.startDate}({user.years}년)
            </S.Detail>
          </S.UserCompanyDetail>
          <S.ButtonWrapper>
            <Button disabled={isClicked} onClick={handleClick} bg="#069C31" fontColor="#fff" size="large">
              수정
            </Button>
          </S.ButtonWrapper>
        </S.ProfileContainer>

        {isShown && (
          <S.ProfileChangeContainer>
            <S.Authority>권한:{UserRole[user.role]}</S.Authority>{' '}
            <Avatar alt="user-image" sx={{ width: 150, height: 150 }} src={user.fileName} />
            <S.FormContainer>
              <S.Form>
                <S.InputWrapper>
                  <label htmlFor="name">이름</label>{' '}
                  <S.Input id="name" name="name" placeholder="홍길동" onChange={onChange} value={name} />{' '}
                </S.InputWrapper>
                <S.InputWrapper>
                  <label htmlFor="email">이메일</label>{' '}
                  <S.Input id="email" name="email" placeholder="abc@console.log" onChange={onChange} value={email} />
                </S.InputWrapper>
                <S.InputWrapper>
                  <label htmlFor="phone">핸드폰번호</label>{' '}
                  <S.Input id="phone" name="phone" placeholder="010-1234-1234" onChange={onChange} value={phone} />
                </S.InputWrapper>
              </S.Form>
              <S.Form>
                <S.InputWrapper>
                  <label htmlFor="current-password">현재 비밀번호</label>{' '}
                  <S.Input
                    id="current-password"
                    name="currentPassword"
                    type="password"
                    onChange={onChange}
                    value={currentPassword}
                  />
                  <S.Warning>비밀번호가 일치하지 않습니다</S.Warning>
                </S.InputWrapper>
                <label htmlFor="new-password">새로운 비밀번호</label>{' '}
                <S.Input id="new-password" name="newPassword" type="password" value={newPassword} onChange={onChange} />
                <S.Warning>비밀번호는 숫자와 영어로 조합된 8~20자리의 문자입니다</S.Warning>
                <label htmlFor="check-password">비밀번호 확인</label>{' '}
                <S.Input
                  id="check-password"
                  name="checkPassword"
                  type="password"
                  value={checkPassword}
                  onChange={onChange}
                />
                <S.Warning>비밀번호가 일치하지 않습니다</S.Warning>
              </S.Form>{' '}
            </S.FormContainer>
            <S.Notice>아래 정보 수정은 관리자 권한입니다</S.Notice>
            <S.UserCompanyDetail>
              <S.Detail>사번:{user.employeeNumber}</S.Detail>
              <S.Detail>부서:{user.department}</S.Detail>
              <S.Detail>직급:{user.position}</S.Detail>
              <S.Detail>
                입사일(근속연수):{user.startDate}({user.years}년)
              </S.Detail>
            </S.UserCompanyDetail>
            <S.ButtonWrapper>
              <Button
                variant="contained"
                bg="#069C31"
                fontColor="#fff"
                size="large"
                onClick={() => {
                  handleClick(), onReset()
                }}
              >
                변경완료
              </Button>
            </S.ButtonWrapper>
          </S.ProfileChangeContainer>
        )}
      </S.ProfilesContainer>
    </S.ProfilePage>
  )
}
export default EditProfile
