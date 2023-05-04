import * as S from './style'
import IconHuman from '../../assets/man.png'
import { useEffect, useState } from 'react'

interface RegisterUser {
  name: string
  email: string
  employeeNumber: string
  department: string
  position: string
  joinDate: string
}

function UserRegister({
  user,
  checkItems,
  checkItemHandler,
}: {
  user: RegisterUser
  checkItems: string[]
  checkItemHandler: Function
}) {
  const [isClicked, setIsClicked] = useState(false)

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkItemHandler(e.target.value, e.target.checked)
    setIsClicked(e.target.checked)
  }

  useEffect(() => {
    setIsClicked(checkItems.includes(user.employeeNumber))
  }, [checkItems])

  return (
    <S.Container>
      <input
        type="checkbox"
        name={`select-${user.employeeNumber}`}
        checked={isClicked}
        value={user.employeeNumber}
        onChange={(e) => onCheck(e)}
      />
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

export default UserRegister
