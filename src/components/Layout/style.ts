import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Grid = styled.div`
  display: grid;
  ${({ theme }) => css`
    grid-template-rows: ${theme.app.size.header.height} calc(100vh - ${theme.app.size.header.height});
    grid-template-columns: ${theme.app.size.nav.width} 1fr;
    grid-template-areas:
      'header header'
      'nav page';
  `}
`

export const Header = styled.header`
  box-sizing: border-box;
  padding: 8px 16px;
  grid-area: header;
  background-color: ${({ theme }) => theme.app.palette.white};
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
`

export const Nav = styled.nav`
  box-sizing: border-box;
  grid-area: nav;
  position: sticky;
  background-color: ${({ theme }) => theme.app.palette.green3};
  top: ${({ theme }) => theme.app.size.header.height};
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 12px 12px;
  min-height: 100%;
  height: max-content;
`

export const NavItem = styled(NavLink)`
  width: 85%;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px;
  border-radius: 5px;
  text-decoration: none;
  color: ${({ theme }) => theme.app.palette.black};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.app.palette.green1};
    color: ${({ theme }) => theme.app.palette.white};
  }
  &.active {
    ${({ theme }) =>
      css`
        background-color: ${theme.app.palette.green1};
        box-shadow: 0 5px 8px 0 #5ebc678f;
        color: ${theme.app.palette.white};
      `}
  }
`

export const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Page = styled.div`
  grid-area: page;
  overflow: auto;
`
