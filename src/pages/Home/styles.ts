import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;
  margin: 0 2rem;

  h1 {
    width: 36.75rem;

    font-family: 'Baloo 2';
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    width: 36.75rem;

    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const IntroItemContainer = styled.div`
  margin: 4.125rem 0 0 0;
  width: 35.4375rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 1.25rem 2.5rem;
`

export const IconBrown = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 100%;
  padding: 0.5rem;
`

export const IconYellow = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.yellow};
  border-radius: 100%;
  padding: 0.5rem;
`

export const IconGray = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme['base-text']};
  border-radius: 100%;
  padding: 0.5rem;
`
export const IconPurple = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 100%;
  padding: 0.5rem;
`
