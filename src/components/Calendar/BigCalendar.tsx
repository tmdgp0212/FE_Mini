import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, CalendarProps, dayjsLocalizer, Event } from 'react-big-calendar'
import { createCalendarEvent, dayjsInstance } from '../../util'
import * as S from './style'

const localizer = dayjsLocalizer(dayjsInstance)

// const components: CalendarProps['components'] = {}

function BigCalendar() {
  const events = [
    createCalendarEvent({ title: '정석화', start: '2023-05-21', end: '2023-05-27', type: 'duty' }),
    createCalendarEvent({ title: '정석화', start: '2023-05-21', end: '2023-05-27', type: 'duty' }),
    createCalendarEvent({ title: '정석화', start: '2023-05-21', end: '2023-05-27', type: 'duty' }),
    createCalendarEvent({ title: '정석화', start: '2023-05-21', end: '2023-05-27', type: 'duty' }),
    createCalendarEvent({ title: '정석화', start: '2023-05-21', end: '2023-05-27', type: 'duty' }),
    createCalendarEvent({ title: '정석화', start: '2023-05-21', end: '2023-05-27', type: 'duty' }),
  ]

  return (
    <S.CalendarContainer>
      <Calendar
        localizer={localizer}
        events={events}
        defaultDate={'2023-05-24'}
        defaultView="month"
        culture={'ko'}
        views={{
          month: true,
          week: true,
          day: true,
          agenda: false,
        }}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        messages={{ showMore: (total) => <span className="showmore">+ {total} more</span> }}
      />
    </S.CalendarContainer>
  )
}

export default BigCalendar
