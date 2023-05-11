import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, dayjsLocalizer, Event } from 'react-big-calendar'
import { createCalendarEvent, dayjsInstance } from '../../util'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import Toolbar from './Toolbar'
import EventWrapper from './EventWrapper'
import * as S from './style'
import { VacationEntity } from '../../types/vacation'
import { getDuty } from '../../api/duty'
import { getVacation } from '../../api/vacation'
import { DutyEntity } from '../../types/duty'

export interface CostomEvent extends Event {
  type: string
}

function BigCalendar() {
  const tmpEvents = [
    createCalendarEvent({ title: '김아무', start: '2023-05-01', end: '2023-05-01', type: 'duty' }),
    createCalendarEvent({ title: '박아무', start: '2023-05-09', end: '2023-05-09', type: 'duty' }),
    createCalendarEvent({ title: '광아무', start: '2023-05-23', end: '2023-05-23', type: 'duty' }),
    createCalendarEvent({ title: '조아무', start: '2023-05-04', end: '2023-05-06', type: 'vacation' }),
    createCalendarEvent({ title: '최아무', start: '2023-05-12', end: '2023-05-18', type: 'vacation' }),
    createCalendarEvent({ title: '이아무', start: '2023-05-20', end: '2023-05-22', type: 'vacation' }),
  ]

  const localizer = dayjsLocalizer(dayjsInstance)
  const [dutys, setDutys] = useState<CostomEvent[]>([])
  const [vacations, setVacations] = useState<CostomEvent[]>([])

  const { data: duty, mutate: dutyMutate } = useMutation((month: number) => getDuty(month), {
    onSuccess: (data) => {
      console.log(data)
      const formattedData: CostomEvent[] = data.map((event: DutyEntity) => ({
        title: event.name,
        start: new Date(event.day),
        end: new Date(event.day),
        status: event.status,
        type: 'duty',
      }))
      setDutys([...formattedData])
    },
  })
  const { data: vacation, mutate: vacationMutate } = useMutation((month: number) => getVacation(month), {
    onSuccess: (data) => {
      const formattedData: CostomEvent[] = data.map((event: VacationEntity) => ({
        title: event.name,
        start: new Date(event.start),
        end: new Date(event.end),
        status: event.status,
        type: 'vacation',
      }))
      setVacations([...formattedData])
    },
  })

  const onNavigate = async (date: Date) => {
    if (date) {
      const month = new Date(date).getMonth() + 1
      await Promise.all([vacationMutate(month), dutyMutate(month)])
    }
  }

  useEffect(() => {
    const month = new Date().getMonth() + 1
    vacationMutate(month)
    dutyMutate(month)
  }, [])

  return (
    <S.CalendarContainer>
      <Calendar
        localizer={localizer}
        // events={vacations && dutys && ([...vacations, ...dutys] as CostomEvent[])}
        events={tmpEvents}
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
        components={{
          toolbar: (props) => <Toolbar {...props} />,
          eventWrapper: EventWrapper,
        }}
        onNavigate={onNavigate}
      />
    </S.CalendarContainer>
  )
}

export default BigCalendar
