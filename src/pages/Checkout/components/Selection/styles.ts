import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 28rem;
  height: 100%;
  gap: 15px;
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  width: 100%;
  height: 100%;
  padding: 2.5rem;

  border-radius: 6px 44px;

  background: ${(props) => props.theme['base-card']};
`

export const SelectedInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

export const SelectInfoText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 23rem;
`

export const SelectInfoTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 23rem;

  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0;
  width: 23rem;

  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme.yellow};

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  color: ${(props) => props.theme.white};
`
