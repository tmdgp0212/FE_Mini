import BigCalendar from '../components/Calendar/BigCalendar'
import Title from '../components/Title'
import { useProtectedOulet } from '../hooks/useProtectedOutlet'

function Home() {
  return (
    <div>
      <Title text="전체 일정" />
      <BigCalendar />
    </div>
  )
}

export default Home
