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
      <S.Thead>
        <tr>
          <th>이름</th>
          <th>사번</th>
          <th>부서</th>
          <th>직급</th>
          <th>권한</th>
          <th>수정</th>
        </tr>
      </S.Thead>
      <S.Tbody>
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.employeeNumber}</td>
            <td>{user.department}</td>
            <td>{user.position}</td>
            <td>{user.role}</td>
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
