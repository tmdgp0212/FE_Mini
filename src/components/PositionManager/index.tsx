import React, { useState } from 'react'
import * as S from './style'
import { useTheme } from '@mui/material'
import Button from '../Button'
import PositionListItem from '../PositionListItem'
import { PositionEntity } from '../../types/position'

const dummy: PositionEntity[] = [
  {
    positionName: '사원',
    vacation: '12',
    status: 'ACTIVATION',
  },
  {
    positionName: '대리',
    vacation: '14',
    status: 'ACTIVATION',
  },
  {
    positionName: '팀장',
    vacation: '16',
    status: 'ACTIVATION',
  },
]

function PositionManager() {
  const theme = useTheme()

  return (
    <S.PositionManagerContainer>
      <h2>직급 관리</h2>
      <S.PositionForm>
        <label htmlFor="position" className="position">
          <span>직급명</span>
          <input type="text" id="position" />
        </label>

        <label htmlFor="vacation" className="vacation">
          <span>연차제한</span>
          <input type="number" id="vacation" />
        </label>
        <Button bg={theme.app.palette.green1} fontcolor={theme.app.palette.white}>
          추가
        </Button>
      </S.PositionForm>
      <S.PositionList>
        <div className="table-header row">
          <span>직급명</span>
          <span>연차제한</span>
          <span className="edit"></span>
          <span className="delete"></span>
        </div>
        <ul>
          {dummy.map((position, index) => (
            <PositionListItem key={index} position={position} />
          ))}
        </ul>
      </S.PositionList>
    </S.PositionManagerContainer>
  )
}

export default PositionManager
