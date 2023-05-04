import * as S from './style'

function SearchedUserTable() {
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
        <tr>
          <td>조승혜</td>
          <td>12341234</td>
          <td>개발</td>
          <td>과장</td>
          <td>관리자</td>
          <td className="edit-btn">수정</td>
        </tr>
        <tr>
          <td>조승혜</td>
          <td>12341234</td>
          <td>개발</td>
          <td>과장</td>
          <td>관리자</td>
          <td className="edit-btn">수정</td>
        </tr>
      </S.Tbody>
    </>
  )
}

export default SearchedUserTable
