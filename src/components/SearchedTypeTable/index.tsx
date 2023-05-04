import { useState } from 'react'
import VacationUserTable from '../VacationUserTable'
import * as S from './style'

export const testUser = [
  {
    name: '이병욱',
    employeeNumber: '2023050401',
    department: '개발2팀',
    position: '사원',
    requestDate: '2023-05-01',
    joinDate: '2022-03-02',
    email: 'lbw@test.com',
  },
  {
    name: '오대성',
    employeeNumber: '2022121101',
    department: '개발1팀',
    position: '대리',
    requestDate: '2023-05-12',
    joinDate: '2019-05-11',
    email: 'ods@test.com',
  },
  {
    name: '조승혜',
    employeeNumber: '2019082801',
    department: '개발1팀',
    position: '과장',
    requestDate: '2023-05-30',
    joinDate: '2017-10-25',
    email: 'csh@test.com',
  },
  {
    name: '정석화',
    employeeNumber: '2013012801',
    department: '개발본부',
    position: '부장',
    requestDate: '2023-05-15',
    joinDate: '2010-11-02',
    email: 'jsh@test.com',
  },
  {
    name: '이혜원',
    employeeNumber: '2015030201',
    department: '개발2팀',
    position: '차장',
    requestDate: '2023-05-11',
    joinDate: '2014-08-05',
    email: 'lhw@test.com',
  },
]

function SearchedTypeTable() {
  const [checkItems, setCheckItems] = useState([])

  return (
    <>
      <S.Thead>
        <tr>
          <th>
            <input type="checkbox" name="select-all" />
          </th>
          <th>이름</th>
          <th>사번</th>
          <th>부서</th>
          <th>직급</th>
          <th>신청 날짜</th>
        </tr>
      </S.Thead>
      <S.Tbody>
        {testUser.map((item) => (
          <VacationUserTable user={item} />
        ))}
      </S.Tbody>
    </>
  )
}

export default SearchedTypeTable
