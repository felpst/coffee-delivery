import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  h1 {
    margin-bottom: 3px;

    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  gap: 0.75rem 0px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const FormTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  margin-bottom: 30px;

  h3 {
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 2px;
  }

  p {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  color: ${(props) => props.theme['base-label']};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  font-family: 'Roboto', sans-serif;

  padding: 0.75rem;
`

export const CEPInput = styled(BaseInput)`
  width: 176px;
`

export const AddressInput = styled(BaseInput)`
  margin-top: 1rem;
  width: 100%;
`

export const ConnectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  width: 100%;
`

export const NumberInput = styled(BaseInput)`
  margin-top: 1rem;
  width: 176px;
`

export const UFInput = styled(BaseInput)`
  margin-top: 1rem;
  width: 60px;
`

export const PaymentOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 0.75rem;
`

export const PaymentOption = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;
  width: 100%;

  border: 1px solid transparent;

  padding: 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  font-family: 'Roboto';
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};

  &.active {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
