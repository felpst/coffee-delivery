import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

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

type OrderInfoProps = {
  register: UseFormRegister<FieldValues>
}

export function OrderInfo({ register }: OrderInfoProps) {
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
          <CEPInput placeholder="CEP" {...register('cep')}></CEPInput>
          <AddressInput placeholder="Rua" {...register('rua')}></AddressInput>
          <ConnectContainer>
            <NumberInput
              placeholder="Número"
              {...register('numero')}
            ></NumberInput>
            <AddressInput
              placeholder="Complemento"
              {...register('complemento')}
            ></AddressInput>
          </ConnectContainer>
          <ConnectContainer>
            <NumberInput
              placeholder="Bairro"
              {...register('bairro')}
            ></NumberInput>
            <AddressInput
              placeholder="Cidade"
              {...register('cidade')}
            ></AddressInput>
            <UFInput placeholder="UF" {...register('uf')}></UFInput>
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
