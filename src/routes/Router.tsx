import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Admin,
  Home,
  NotFound,
  Signup,
  User,
  Logout,
  UserControl,
  RegisterControl,
  ScheduleControl,
  EditProfile,
} from '../pages'
import RequestVacation from '../pages/RequestVacation'
import ProtectedRouter from './ProtectedRouter'
import Layout from '../components/Layout'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route element={<Layout />}>
          <Route element={<ProtectedRouter />}>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />}>
              <Route path="mypage" element={<>내 정보 수정</>} />
              <Route path="vacation" element={<>내 연차/당직 관리</>} />
            </Route>
            <Route path="/admin" element={<Admin />}>
              <Route path="vacation" element={<ScheduleControl />} />
              <Route path="signup" element={<RegisterControl />} />
              <Route path="user" element={<UserControl />} />
            </Route>
            <Route path="/logout" element={<Logout />} />
=======
        <Route element={<ProtectedRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />}>
            <Route path="mypage" element={<EditProfile />} />
            <Route path="vacation" element={<RequestVacation />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="vacation" element={<ScheduleControl />} />
            <Route path="signup" element={<RegisterControl />} />
            <Route path="user" element={<UserControl />} />
>>>>>>> 830d8ae2cba56db811e7d81d50796c38ce306053
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
