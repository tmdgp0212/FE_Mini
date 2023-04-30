import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, dayjsLocalizer, Event } from 'react-big-calendar'
import { createCalendarEvent, dayjsInstance } from '../../util'

const localizer = dayjsLocalizer(dayjsInstance)

function BigCalendar() {
  const events = [createCalendarEvent({ title: '정석화', start: '2023-05-02', end: '2023-05-04' })]

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        defaultDate={'2023-04-24'}
        defaultView="week"
        culture={'ko'}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  )
}

export default BigCalendar
