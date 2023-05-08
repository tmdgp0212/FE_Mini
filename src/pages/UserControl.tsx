import { useState } from 'react'
import EditUserInfo from '../components/EditUserInfo'
import Modal from '../components/Modal'
import SearchUser from '../components/SearchUser'
import SearchedUserTable from '../components/SearchedUserTable'
import Table from '../components/Table'
import Title from '../components/Title'
import { UserEntity } from '../types/user'

const dummy = [
  {
    id: 2,
    username: 'tmdgp0212',
    name: '조승혜',
    birthDate: '1995-02-12',
    email: 'tmdgp0212@naver.com',
    phoneNumber: '010-5390-3029',
    employeeNumber: '12341234',
    department: '개발',
    position: '대리',
    role: 'User',
    years: '5',
    createdAt: new Date().getDate(),
    updatedAt: new Date().getDate(),
    deleted: false,
  },
  {
    id: 1,
    username: 'test223',
    name: '김아무개',
    birthDate: '1995-02-12',
    email: 'amu1231@naver.com',
    phoneNumber: '010-1234-1234',
    employeeNumber: '94838772',
    department: '영업',
    position: '사원',
    role: 'Admin',
    years: '5',
    createdAt: new Date().getDate(),
    updatedAt: new Date().getDate(),
    deleted: false,
  },
]

function UserControl() {
  const [openModal, setOpenModal] = useState(false)
  const [userData, setUserData] = useState<UserEntity>()

  return (
    <>
      <Title text={'사원 관리'} />
      <SearchUser />
      <Table>
        <SearchedUserTable users={dummy} ModalHandler={setOpenModal} setUserData={setUserData} />
      </Table>

      {openModal && (
        <Modal ModalHandler={setOpenModal}>
          <EditUserInfo userData={userData} />
        </Modal>
      )}
    </>
  )
}

export default UserControl
