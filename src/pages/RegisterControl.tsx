import Title from '../components/Title'
import AcceptButtons from '../components/AcceptButtons/AcceptButtons'
import UserRegisterControl from '../components/UserRegisterControl'

function RegisterControl() {
  const AcceptFunc = () => {
    console.log('회원가입 승인')
  }
  const rejectFunc = () => {
    console.log('회원가입 반려')
  }
  return (
    <>
      <Title text="회원가입 신청 내역" />
      <UserRegisterControl />
      <AcceptButtons PositiveMsg="승인" NegativeMsg="거부" acceptFunc={AcceptFunc} rejectFunc={rejectFunc} />
    </>
  )
}

export default RegisterControl
