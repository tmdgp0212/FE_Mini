import React from 'react'
import { EventWrapperProps } from 'react-big-calendar'

interface CostomEventWrapperProps {
  event: EventWrapperProps
  children: React.ReactElement
}

function EventWrapper({ children, event }: CostomEventWrapperProps) {
  console.log(event)
  return <div onClick={() => console.log('dd')}>{children}</div>
}

export default EventWrapper
