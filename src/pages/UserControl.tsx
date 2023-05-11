import Modal from '../components/Modal'
import SearchUser from '../components/SearchUser'
import SearchedUserTable from '../components/SearchedUserTable'
import Table from '../components/Table'
import Title from '../components/Title'

function UserControl() {
  return (
    <>
      <Title text={'사원 관리'} />
      <SearchUser />
      <Table>
        <SearchedUserTable />
      </Table>
      <Modal>
        <div>ddd</div>
      </Modal>
    </>
  )
}

export default UserControl
