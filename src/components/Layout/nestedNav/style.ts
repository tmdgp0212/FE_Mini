import styled from '@emotion/styled'
import * as StyledLayout from '../style'
import MaterialAccordion from '@mui/material/Accordion'
import MaterialAccordionSummary from '@mui/material/AccordionSummary'

export const NestedNavItem = styled(StyledLayout.NavItem)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
export const NestedNavMainIconWrapper = styled.div`
  margin-right: 12px;
  svg {
    font-size: ${({ theme }) => theme.app.size.font.medium};
    display: flex;
    align-items: center;
  }
`

export const Accordion = styled(MaterialAccordion)`
  width: 100%;
  background-color: transparent;
  box-shadow: none;
  &::before {
    display: none;
  }
`

export const AccordionSummary = styled(MaterialAccordionSummary)`
  padding: 4px;
`
