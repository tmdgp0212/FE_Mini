import React from 'react'
import Table from '../../components/Table'
import Title from '../../components/Title'
function RequestVacation() {
  return (
    <>
      <Title text="연차/당직 신청" />
      <Title text="내 연차/당직 보기" />
      <Table>
        <thead>
          <tr>
            <th>신청일</th>
            <th>구분</th>
            <th>당직(연차)일</th>
            <th>승인여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023.05.10.</td>
            <td>당직</td>
            <td>2023.05.10.</td>
            <td>대기</td>
          </tr>
          <tr>
            <td>2023.05.10.</td>
            <td>연차</td>
            <td>2023.05.10.~2023.05.21.</td>
            <td>승인</td>
          </tr>
          <tr>
            <td>2023.05.10.</td>
            <td>연차</td>
            <td>2023.05.10.~2023.05.21.</td>
            <td>거부</td>
          </tr>
        </tbody>
      </Table>{' '}
    </>
  )
}

export default RequestVacation
