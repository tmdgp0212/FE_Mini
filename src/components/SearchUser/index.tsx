import { useTheme } from '@emotion/react'
import Button from '../Button'
import * as S from './style'

function SearchUser() {
  const theme = useTheme()
  return (
    <S.SearchForm>
      <S.SearchType>
        <label htmlFor="type">검색조건</label>
        <select id="type">
          <option value="name">이름</option>
          <option value="department">부서</option>
          <option value="position">직급</option>
        </select>
      </S.SearchType>

      <input type="text" />
      <Button bg={theme.app.palette.green1} fontColor={theme.app.palette.white}>
        검색
      </Button>
    </S.SearchForm>
  )
}

export default SearchUser
