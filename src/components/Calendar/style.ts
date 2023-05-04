import styled from '@emotion/styled'

export const CalendarContainer = styled.div`
  .rbc-calendar {
    overflow: hidden;
  }
  .rbc-header {
    line-height: 1.8;
  }
  .rbc-time-view {
    .rbc-label {
      display: none;
    }
    .rbc-allday-cell {
      height: 540px;
      max-height: unset;
    }
    .rbc-time-content {
      display: none;
    }
  }

  .showmore {
    color: ${({ theme }) => theme.app.palette.green1};
  }
`
