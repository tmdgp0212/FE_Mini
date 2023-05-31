import React, { useState } from 'react'
import Title from '../components/Title'
import AddPositionForm from '../components/AddPositionForm'
import PositionList from '../components/PositionList'
import { useMutation } from '@tanstack/react-query'
import { registrationPosition } from '../api/position'
import { PositionRegisterReq } from '../api/type'
import { client } from '../main'

function PositionEditor() {
  const [inputValue, setInputValue] = useState({ name: '', vacation: 1 })
  const { mutate } = useMutation((position: PositionRegisterReq) => registrationPosition(position), {
    onSuccess: () => {
      client.invalidateQueries(['position'])
    },
  })

  const clickAddPosition = () => {
    mutate({ positionName: inputValue.name, vacation: inputValue.vacation })
  }

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(inputValue)
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Title text="직급관리" />
      <AddPositionForm type="POSITION" addMutate={clickAddPosition} onChange={changeInput} inputValue={inputValue} />
      <PositionList />
    </>
  )
}

export default PositionEditor
