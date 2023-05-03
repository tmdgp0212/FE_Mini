import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Admin, Home, NotFound, Signup, User, Logout } from '../pages'
import ProtectedRouter from './ProtectedRouter'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />}>
            <Route path="mypage" element={<>내 정보 수정</>} />
            <Route path="vacation" element={<>내 연차/당직 관리</>} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="vacation" element={<>연차/당직 신청내역보기</>} />
            <Route path="signup" element={<>회원가입 신청내역보기</>} />
            <Route path="user" element={<>유저 정보 수정</>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
