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
  padding: 5.875rem 0 6.75rem 0;
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
  background: ${(props) => props.theme.purple};
  border-radius: 100%;
  padding: 0.5rem;
`
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 2.125rem;
  }
`

export const CoffeeListItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding-bottom: 9.8125rem;
`

export const CoffeeListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['base-card']};

  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: calc(0px - 1.5rem);
  }

  span {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;

    margin-top: 1rem;
  }

  p {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    text-align: center;

    color: ${(props) => props.theme['base-label']};
    width: 216px;

    margin-top: 0.5rem;
  }
`

export const Tag = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  padding: 0.25rem 0.5rem;
  border-radius: 999px;

  margin-top: 0.75rem;

  font-family: 'Roboto';
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
`

export const BuyDashboardContainer = styled.div`
  width: 13rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.375rem;
    padding: 0px 0.65rem;

    background: ${(props) => props.theme['purple-dark']};

    border: none;
    border-radius: 6px;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;

  gap: 0.25rem;

  span {
    margin: 0px;
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    width: min-content;
    color: ${(props) => props.theme['base-text']};
    margin: 0px;
    font-size: 0.875rem;
  }
`

export const CounterButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['base-button']};

  height: 2.375rem;
  border-radius: 6px;

  span {
    margin: 0px;
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;
    color: ${(props) => props.theme['base-title']};
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    height: 0.875rem;
    padding: 0.35rem;
  }
`
