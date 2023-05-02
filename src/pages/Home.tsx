import BigCalendar from '../components/Calendar/BigCalendar'
import { useProtectedOulet } from '../hooks/useProtectedOutlet'

function Home() {
  const user = useProtectedOulet()

  return (
    <div>
      <BigCalendar />
    </div>
  )
}

export default Home
