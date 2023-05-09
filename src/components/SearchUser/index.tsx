import { useTheme } from '@emotion/react'
import Button from '../Button'
import * as S from './style'
import React from 'react'
import { SearchType } from '../../pages/UserControl'

interface SearchUserProps {
  searchType: SearchType
  searchInput: string
  searchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onSearch: () => void
}

function SearchUser({ searchType, searchInput, searchInputChange, searchTypeChange, onSearch }: SearchUserProps) {
  const theme = useTheme()
  return (
    <S.SearchForm>
      <S.SearchType>
        <label htmlFor="type">검색조건</label>
        <select id="type" onChange={searchTypeChange} value={searchType}>
          <option value="NAME">이름</option>
          <option value="EMAIL">이메일</option>
          <option value="DEPARTMENT">부서</option>
          <option value="POSITION">직급</option>
        </select>
      </S.SearchType>

      <input type="text" value={searchInput} onChange={searchInputChange} />
      <Button bg={theme.app.palette.green1} fontColor={theme.app.palette.white} onClick={onSearch}>
        검색
      </Button>
    </S.SearchForm>
  )
}

export default SearchUser
