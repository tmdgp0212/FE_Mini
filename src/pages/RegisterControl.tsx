import Title from '../components/Title'
import AcceptButtons from '../components/AcceptButtons/AcceptButtons'
import UserRegisterControl from '../components/UserRegisterControl'

function RegisterControl() {
  return (
    <>
      <Title text="회원가입 신청 내역" />
      <UserRegisterControl />
      <AcceptButtons />
    </>
  )
}

export default RegisterControl
