import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: ${(props) => props.theme.background};

  nav {
    display: flex;
    gap: 0.75rem;
  }

  a {
    display: flex;
    align-items: center;

    height: 2.375rem;
    padding: 0 0.5rem;

    border-radius: 6px;
  }
`

export const LocationContainer = styled.a`
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-light']};
  text-decoration: none;
`
export const ButtonCart = styled(NavLink)`
  background: ${(props) => props.theme['yellow-light']};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme['yellow-dark']};
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 8px;
  transition: all 0.2s ease;
`

export const Badge = styled.span`
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 999px;

  color: ${(props) => props.theme['yellow-light']};

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 100%;

  padding: 0.35rem 0.5rem;

  transition: all 0.2s ease;

  position: absolute;
  top: -12px;
  right: -12px;
`

export const Cart = styled.div`
  position: relative;
`
