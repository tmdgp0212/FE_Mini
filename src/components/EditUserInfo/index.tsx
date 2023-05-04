import { useState } from 'react'
import { UserEntity } from '../../types/user'
import Button from '../Button'
import * as S from './style'
import { useTheme } from '@emotion/react'

interface EditUserProps {
  userData: UserEntity | undefined
}

function EditUserInfo({ userData }: EditUserProps) {
  const theme = useTheme()
  const [editRoleOpen, setEditRoleOpen] = useState(false)

  return (
    <S.EditUserContainer>
      <div className="fixedData">
        <div className="left">
          <img src="/src/assets/man.png" alt="profile" />
          <p className="name">{userData?.name}</p>
          <span className="username">{userData?.username}</span>
        </div>
        <div className="right">
          <p>이메일: {userData?.email}</p>
          <p>연락처: {userData?.phoneNumber}</p>
        </div>
      </div>
      <form className="edit-user-form">
        <div className="inputs">
          <label htmlFor="employeeNumber">사번</label>
          <input id="employeeNumber" name="employeeNumber" type="text" placeholder="사번을 입력해주세요" />

          <label htmlFor="years">입사연차</label>
          <input id="years" name="years" type="text" placeholder="입사연차를 입력해주세요" />

          <label htmlFor="department">부서</label>
          <input id="department" name="department" type="text" placeholder="부서를 입력해주세요" />

          <label htmlFor="position">직급</label>
          <input id="position" name="position" type="text" placeholder="직급을 입력해주세요" />
        </div>
        <Button bg={theme.app.palette.green1} fontColor={theme.app.palette.white}>
          수정
        </Button>
      </form>
      <div className="editRole">
        <div className="editor-toggle">
          <p onClick={() => setEditRoleOpen((prev) => !prev)}>
            <span className="icon">{editRoleOpen ? '▲' : '▼'}</span> 권한설정
          </p>
          <span className="warn">
            관리자 권한을 가진 사용자는 모든 정보를 조회 / 수정 할 수 있습니다. 설정 시 주의가 필요합니다.
          </span>
        </div>
        {editRoleOpen && (
          <form className="selet-role">
            <div>
              <input type="radio" name="role" id="common" checked={userData && userData.role === 'ADMIN'} />
              <label htmlFor="common">일반</label>
            </div>
            <div>
              <input type="radio" name="role" id="manager" checked={userData && userData.role === 'STAFF'} />
              <label htmlFor="manager">관리자</label>
            </div>
            <Button bg={theme.app.palette.orange} fontColor={theme.app.palette.white}>
              권한수정
            </Button>
          </form>
        )}
      </div>
    </S.EditUserContainer>
  )
}

export default EditUserInfo
