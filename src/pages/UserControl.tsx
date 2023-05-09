import { ChangeEvent, useState } from 'react'
import EditUserInfo from '../components/EditUserInfo'
import Modal from '../components/Modal'
import SearchUser from '../components/SearchUser'
import SearchedUserTable from '../components/SearchedUserTable'
import Table from '../components/Table'
import Title from '../components/Title'
import { UserEntity } from '../types/user'
import { useMutation } from '@tanstack/react-query'
import Pagenation from '../components/Pagenation'

export type SearchType = 'EMAIL' | 'POSITION' | 'NAME' | 'DEPARTMENT'
interface SearchMutateKey {
  type: string
  keyword: string
  page: number
}

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
    positionName: '대리',
    role: 'ADMIN',
    joiningDay: '2020-01-01',
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
    positionName: '사원',
    joiningDay: '2020-01-01',
    role: 'STAFF',
    years: '5',
    createdAt: new Date().getDate(),
    updatedAt: new Date().getDate(),
    deleted: false,
  },
]

function UserControl() {
  const [openModal, setOpenModal] = useState(false)
  const [userData, setUserData] = useState<UserEntity>()
  const [searchType, setSearchType] = useState<SearchType>('NAME')
  const [searchInput, setSearchInput] = useState('')
  const [page, setPage] = useState(1)
  const [nowSearching, setNowSearching] = useState({ type: '', keyword: '' }) // 검색 시 현재 검색정보 저장
  const [maxPageLength, setMaxPageLength] = useState(1) // 검색 시 최대 페이지 저장

  const { data: seachedUser, mutate: searchMutate } = useMutation(
    async ({ type, keyword, page }: SearchMutateKey) => {
      const res = await fetch(`/api/v1/member/page/search?text=${type}&keyword=${keyword}&page=${page}&size=10`)
      // return res.datas
    },
    {
      onSuccess: (data) => {
        // setMaxPageLength(data.total)
      },
    },
  )

  const searchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const searchTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value as SearchType)
  }

  const onSearch = () => {
    if (searchInput.length <= 1) return alert('최소 2글자 이상 입력해주세요')
    setNowSearching({ type: searchType, keyword: searchInput })
    searchMutate({ type: searchType, keyword: searchInput, page: 0 })
    setPage(1)
  }

  const pageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    searchMutate({ type: nowSearching.type, keyword: nowSearching.keyword, page: value - 1 })
  }

  return (
    <>
      <Title text={'사원 관리'} />
      <SearchUser
        searchType={searchType}
        searchInput={searchInput}
        searchInputChange={searchInputChange}
        searchTypeChange={searchTypeChange}
        onSearch={onSearch}
      />
      <Table>
        <SearchedUserTable users={dummy} ModalHandler={setOpenModal} setUserData={setUserData} />
      </Table>
      <Pagenation page={page} maxLength={maxPageLength} pageChange={pageChange} />

      {openModal && (
        <Modal ModalHandler={setOpenModal}>
          <EditUserInfo userData={userData} />
        </Modal>
      )}
    </>
  )
}

export default UserControl
