import React from 'react'
import * as S from './style'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Link, Outlet } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { GrHomeRounded, GrUserAdmin } from 'react-icons/gr'
import { MdLogout } from 'react-icons/md'
import NestedNav from './nestedNav'
import UserArea from '../userArea'
import { UserPayload } from '../../types/user'

interface LayoutProps {
  user?: UserPayload | null
}

function Layout({ user }: LayoutProps) {
  return (
    <S.Grid>
      <S.Header>
        <Link to="/">
          <Logo />
        </Link>
        <UserArea user={user} />
      </S.Header>
      <S.Nav>
        <S.NavGroup>
          <S.NavItem className={({ isActive }) => (isActive ? 'active' : '')} to="/">
            <GrHomeRounded />
            Home
          </S.NavItem>
          <NestedNav
            mainTitle="user"
            mainIcon={<AiOutlineUser />}
            menuInfoList={[
              { title: '내 정보 수정', to: '/user/mypage' },
              { title: '내 연차/당직 관리', to: '/user/vacation' },
            ]}
          />
          <NestedNav
            mainTitle="admin"
            mainIcon={<GrUserAdmin />}
            menuInfoList={[
              { title: '연차/당직 신청내역보기', to: '/admin/vacation' },
              { title: '회원가입 신청내역보기', to: '/admin/signup' },
              { title: '유저 정보 수정', to: '/admin/user' },
            ]}
          />
        </S.NavGroup>
        <S.NavItem to="/logout">
          <MdLogout /> Logout
        </S.NavItem>
      </S.Nav>
      <S.Page id="page">{user ? <Outlet context={{ user }} /> : <div>로그인 해주세요</div>}</S.Page>
    </S.Grid>
  )
}

export default Layout
