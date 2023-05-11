import React, { useState } from 'react'
import { PositionEntity } from '../../types/position'
import { useMutation } from '@tanstack/react-query'
import { instance } from '../../api/instance'
import { deletePosition, editPosition } from '../../api/position'

interface PositionItemProps {
  position: PositionEntity
}

function PositionListItem({ position }: PositionItemProps) {
  const [vacationInput, setVacationInput] = useState({
    vacation: position.vacation,
  })
  const [isEdit, setIsEdit] = useState(false)

  const { mutate: modifyMutate } = useMutation(() => editPosition(position.positionName, vacationInput))
  const { mutate: deleteMutate } = useMutation(() => deletePosition(position.positionName))

  const clickEditButton = () => {
    if (isEdit) {
      setVacationInput({
        vacation: position.vacation,
      })
    }
    setIsEdit((prev) => !prev)
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVacationInput({ ...vacationInput, [e.target.name]: e.target.value })
    e.stopPropagation()
  }

  return (
    <li className="row">
      <span>{position.positionName}</span>
      {isEdit ? (
        <>
          <input name="vacation" type="number" onChange={inputChangeHandler} value={vacationInput.vacation} />
        </>
      ) : (
        <>
          <span>{position.vacation}</span>
        </>
      )}

      <span className="edit btn" onClick={clickEditButton}>
        {isEdit ? '수정취소' : '수정'}
      </span>
      {isEdit ? (
        <span className="confirm btn" onClick={() => modifyMutate()}>
          수정완료
        </span>
      ) : (
        <span
          className="delete btn"
          onClick={() => {
            deleteMutate()
          }}
        >
          삭제
        </span>
      )}
    </li>
  )
}

export default PositionListItem
