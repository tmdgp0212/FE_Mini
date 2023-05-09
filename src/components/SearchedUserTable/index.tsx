import { UserEntity } from '../../types/user'
import * as S from './style'

interface SearchedUserProps {
  users: UserEntity[]
  ModalHandler: React.Dispatch<React.SetStateAction<boolean>>
  setUserData: React.Dispatch<React.SetStateAction<UserEntity>>
}

function SearchedUserTable({ users, ModalHandler, setUserData }: SearchedUserProps) {
  const openModal = (user: UserEntity) => {
    ModalHandler(true)
    setUserData(user)
  }
  return (
    <>
      <colgroup>
        <col width="13%" />
        <col width="13%" />
        <col width="13%" />
        <col width="13%" />
        <col width="13%" />
        <col width="13%" />
      </colgroup>
      <S.Thead>
        <tr>
          <th className="name">이름</th>
          <th className="employeeNumber">사번</th>
          <th className="department">부서</th>
          <th className="position">직급</th>
          <th className="role">권한</th>
          <th className="edit">수정</th>
        </tr>
      </S.Thead>
      <S.Tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="name">{user.name}</td>
            <td className="employeeNumber">{user.employeeNumber}</td>
            <td className="department">{user.department}</td>
            <td className="position">{user.positionName}</td>
            <td className="role">{user.role}</td>
            <td className="edit-btn" onClick={() => openModal(user)}>
              수정
            </td>
          </tr>
        ))}
      </S.Tbody>
    </>
  )
}

export default SearchedUserTable
