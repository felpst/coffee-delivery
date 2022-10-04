import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressInput,
  CEPInput,
  ConnectContainer,
  FormContainer,
  FormTitle,
  NumberInput,
  OrderInfoContainer,
  PaymentOption,
  PaymentOptionsContainer,
  UFInput,
} from './styles'

export function OrderInfo() {
  return (
    <OrderInfoContainer>
      <h1>Complete seu pedido</h1>
      <FormContainer>
        <FormTitle>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormTitle>
        <form action="">
          <CEPInput placeholder="CEP"></CEPInput>
          <AddressInput placeholder="Rua"></AddressInput>
          <ConnectContainer>
            <NumberInput placeholder="Número"></NumberInput>
            <AddressInput placeholder="Complemento"></AddressInput>
          </ConnectContainer>
          <ConnectContainer>
            <NumberInput placeholder="Bairro"></NumberInput>
            <AddressInput placeholder="Cidade"></AddressInput>
            <UFInput placeholder="UF"></UFInput>
          </ConnectContainer>
        </form>
      </FormContainer>
      <FormContainer>
        <FormTitle>
          <CurrencyDollar size={22} color="#8047F8" />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </FormTitle>
        <PaymentOptionsContainer>
          <PaymentOption>
            <CreditCard size={16} color="#8047F8" />
            <p>CARTÃO DE CRÉDITO</p>
          </PaymentOption>
          <PaymentOption>
            <Bank size={16} color="#8047F8" />
            <p>CARTÃO DE DÉBITO</p>
          </PaymentOption>
          <PaymentOption>
            <Money size={16} color="#8047F8" />
            <p>DINHEIRO</p>
          </PaymentOption>
        </PaymentOptionsContainer>
      </FormContainer>
    </OrderInfoContainer>
  )
}
