import Title from '../components/Title'
import CheckBox from '../components/CheckBox/CheckBox'
import RegisterUserTable from '../components/RegisterUserTable/RegisterUserTable'
import styled from '@emotion/styled'
import { testUser } from '../components/SearchedTypeTable'
import AcceptButtons from '../components/AcceptButtons/AcceptButtons'

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

function RegisterControl() {
  return (
    <>
      <Title text="회원가입 신청 내역" />
      <CheckBox text="전체 선택" />
      <TableContainer>
        {testUser.map((user) => (
          <RegisterUserTable user={user} />
        ))}
      </TableContainer>
      <AcceptButtons />
    </>
  )
}

export default RegisterControl
