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
  DepartmentEditor,
  PositionEditor,
  EditProfile,
} from '../pages'
import RequestVacation from '../pages/RequestVacation'
import ProtectedRouter from './ProtectedRouter'
import Layout from '../components/Layout'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ProtectedRouter />}>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />}>
              <Route path="mypage" element={<EditProfile />} />
              <Route path="vacation" element={<RequestVacation />} />
            </Route>
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="vacation" element={<ScheduleControl />} />
            <Route path="signup" element={<RegisterControl />} />
            <Route path="user" element={<UserControl />} />
            <Route path="position" element={<PositionEditor />} />
            <Route path="department" element={<DepartmentEditor />} />
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
