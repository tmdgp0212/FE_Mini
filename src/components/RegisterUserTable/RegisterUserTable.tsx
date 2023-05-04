import * as S from './style'
import IconHuman from '../../assets/man.png'

interface RegisterUser {
  name: string
  email: string
  employeeNumber: string
  department: string
  position: string
  joinDate: string
}

function RegisterUserTable({ user }: { user: RegisterUser }) {
  return (
    <S.Container>
      <input type="checkbox" name={`select-${user.employeeNumber}`} />
      <img src={IconHuman} alt="사용자" />
      <S.UserInfo>
        <div className="userName">{user.name}</div>
        <div className="userEmail">{user.email}</div>
      </S.UserInfo>
      <S.UserDetail>
        <div className="employeeNum">사번 : {user.employeeNumber}</div>
        <div className="department">부서 : {user.department}</div>
        <div className="position">직급 : {user.position}</div>
        <div className="joinDate">입사일(근속연수): {user.joinDate}</div>
      </S.UserDetail>
    </S.Container>
  )
}

export default RegisterUserTable
