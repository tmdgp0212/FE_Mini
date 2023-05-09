import Title from '../components/Title'
import SelectedType from '../components/SelectedType'
import UserScheduleControl from '../components/UserScheduleControl'

function ScheduleControl() {
  return (
    <>
      <Title text={'연차/당직 신청내역'} />
      <SelectedType />
      <UserScheduleControl />
    </>
  )
}

export default ScheduleControl
