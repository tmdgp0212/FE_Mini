import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Admin, Home, Login, Signup, User } from '../pages'
import ProtectedRouter from './ProtectedRouter'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
