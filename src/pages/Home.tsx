import BigCalendar from '../components/Calendar/BigCalendar'
import { useProtectedOulet } from '../hooks/useProtectedOutlet'

function Home() {
  const user = useProtectedOulet()

  return user ? (
    <div>
      <BigCalendar />
    </div>
  ) : null
}

export default Home
