import { Event } from 'react-big-calendar'
import { dayjsInstance } from './dayjs'

export const createCalendarEvent = ({
  title,
  start,
  end,
  allDay,
  type,
}: {
  title: string
  start: string
  end: string
  allDay?: boolean
  type: string
}) => {
  return {
    title,
    start: dayjsInstance(start).toDate(),
    end: dayjsInstance(end).toDate(),
    allDay: !!allDay,
    type,
  } as Event
}
