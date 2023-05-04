import Title from '../components/Title'
import Table from '../components/Table'
import SelectedType from '../components/SelectedType'
import UserScheduleControl from '../components/UserScheduleControl'
import AcceptButtons from '../components/AcceptButtons/AcceptButtons'

function ScheduleControl() {
  return (
    <>
      <Title text={'연차/당직 신청내역'} />
      <SelectedType />
      <Table>
        <UserScheduleControl />
      </Table>
      <AcceptButtons />
    </>
  )
}

export default ScheduleControl
