import * as S from './style'

function SearchUser() {
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
      <button>검색</button>
    </S.SearchForm>
  )
}

export default SearchUser
