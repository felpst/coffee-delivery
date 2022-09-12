import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;
  }

  a {
    display: flex;
    align-items: center;

    height: 2.375rem;
    padding: 0 0.5rem;

    border-radius: 4px;
  }
`

export const LocationContainer = styled.a`
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-light']};
`
