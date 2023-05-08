import React from 'react'
import * as S from './style'

function SelectedType() {
  return (
    <S.SearchType>
      <label htmlFor="type">검색조건</label>
      <select id="type">
        <option value="vacation">연차</option>
        <option value="duty">당직</option>
      </select>
    </S.SearchType>
  )
}

export default SelectedType
