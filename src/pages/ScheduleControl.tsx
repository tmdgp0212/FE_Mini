import Title from '../components/Title'
import Table from '../components/Table'
import SelectedType from '../components/SelectedType'
import UserScheduleControl from '../components/UserScheduleControl'
import AcceptButtons from '../components/AcceptButtons/AcceptButtons'

function ScheduleControl() {
  const AcceptFunc = () => {
    console.log('연차/당직 승인')
  }
  const rejectFunc = () => {
    console.log('연차/당직 반려')
  }
  return (
    <>
      <Title text={'연차/당직 신청내역'} />
      <SelectedType />
      <Table>
        <UserScheduleControl />
      </Table>
      <AcceptButtons PositiveMsg="승인" NegativeMsg="반려" acceptFunc={AcceptFunc} rejectFunc={rejectFunc} />
    </>
  )
}

export default ScheduleControl
