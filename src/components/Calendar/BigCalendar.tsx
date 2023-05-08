import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, dayjsLocalizer, Event as OriginEvent } from 'react-big-calendar'
import { createCalendarEvent, dayjsInstance } from '../../util'
import * as S from './style'
import { useTheme } from '@mui/material'
import Toolbar from './Toolbar'
import EventWrapper from './EventWrapper'

interface Event extends OriginEvent {
  type: string
}

function BigCalendar() {
  const events = [
    createCalendarEvent({ title: '정석화(영업)', start: '2023-05-21', end: '2023-05-21', type: 'duty' }),
    createCalendarEvent({ title: '정석화(개발)', start: '2023-05-23', end: '2023-05-23', type: 'duty' }),
    createCalendarEvent({ title: '정석화(인사)', start: '2023-05-25', end: '2023-05-26', type: 'duty' }),
    createCalendarEvent({ title: '정석화(마케팅)', start: '2023-05-21', end: '2023-05-23', type: 'vacation' }),
    createCalendarEvent({ title: '정석화(개발)', start: '2023-05-24', end: '2023-05-26', type: 'vacation' }),
    createCalendarEvent({ title: '정석화(영업)', start: '2023-05-21', end: '2023-05-27', type: 'vacation' }),
  ]

  const theme = useTheme()
  const localizer = dayjsLocalizer(dayjsInstance)

  const eventPropGetter = (event: Event) => {
    const defaultStyle = {
      color: theme.app.palette.black,
      borderRadius: '0px',
      outline: 'none',
    }

    if (event.type === 'duty') {
      return {
        style: {
          ...defaultStyle,
          backgroundColor: theme.app.palette.green2,
          border: `1px solid ${theme.app.palette.green4}`,
        },
      }
    } else {
      return {
        style: {
          ...defaultStyle,
          backgroundColor: theme.app.palette.yellow2,
          border: `1px solid ${theme.app.palette.yellow1}`,
        },
      }
    }
  }

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
          agenda: false,
        }}
        popup={true}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        eventPropGetter={(event) => eventPropGetter(event as Event)}
        components={{
          toolbar: Toolbar,
          // eventWrapper: EventWrapper,
        }}
      />
    </S.CalendarContainer>
  )
}

export default BigCalendar
