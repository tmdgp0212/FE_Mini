import { useState } from 'react'
import UserRegister from '../UserRegister'
import { testUser } from '../UserScheduleControl'
import * as S from './style'
import AcceptButtons from '../AcceptButtons'

function UserRegisterControl() {
  const AcceptFunc = () => {
    console.log('회원가입 승인')
  }
  const rejectFunc = () => {
    console.log('회원가입 반려')
  }
  const [checkItems, setCheckItems] = useState<string[]>([])

  const checkedItemHandler = (id: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckItems([...checkItems, id])
    } else {
      setCheckItems(checkItems.filter((el) => el !== id))
    }
  }

  const onCheckAll = (checked: boolean) => {
    if (checked) {
      const idArray: string[] = []
      testUser.forEach((item) => idArray.push(item.employeeNumber))
      setCheckItems(idArray)
    } else {
      setCheckItems([])
    }
  }
  return (
    <>
      <S.Label>
        <input
          type="checkbox"
          name="select-all"
          onChange={(e) => onCheckAll(e.target.checked)}
          checked={checkItems.length === testUser.length ? true : false}
        />
        전체 선택
      </S.Label>
      <S.Container>
        {testUser.map((user) => (
          <UserRegister
            key={user.employeeNumber}
            user={user}
            checkItems={checkItems}
            checkItemHandler={checkedItemHandler}
          />
        ))}
      </S.Container>
      <AcceptButtons
        checkItems={checkItems}
        PositiveMsg="승인"
        NegativeMsg="거부"
        acceptFunc={AcceptFunc}
        rejectFunc={rejectFunc}
      />
    </>
  )
}

export default UserRegisterControl
