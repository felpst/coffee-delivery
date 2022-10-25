import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.25rem;

  img {
    width: 4rem;
  }
`

export const SelectionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 23rem;
`

export const CoffeeItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 1.25rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: 100%;
  height: 2.5rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  border: none;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  font-family: 'Roboto';
  font-size: 0.75rem;
  font-weight: 400;
`

export const CoffeeItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`

export const CoffeeItemPrice = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
`

export const Line = styled.div`
  width: 23rem;
  height: 1px;
  background: ${(props) => props.theme['base-button']};
`
