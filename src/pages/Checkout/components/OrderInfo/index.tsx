import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import {
  AddressInput,
  CEPInput,
  ConnectContainer,
  FormContainer,
  FormTitle,
  NumberInput,
  OrderInfoContainer,
  PaymentOptionsContainer,
  UFInput,
} from './styles'

interface OrderInfoProps {
  handleSetPaymentOption(option: string): void
  paymentOption: string
}

export function OrderInfo({
  handleSetPaymentOption,
  paymentOption,
}: OrderInfoProps) {
  const { register } = useFormContext()

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
        <CEPInput
          placeholder="CEP"
          min={8}
          max={8}
          {...register('cep')}
        ></CEPInput>
        <AddressInput
          placeholder="Rua"
          min={1}
          {...register('rua')}
        ></AddressInput>
        <ConnectContainer>
          <NumberInput
            placeholder="Número"
            min={1}
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
            min={1}
            {...register('bairro')}
          ></NumberInput>
          <AddressInput
            placeholder="Cidade"
            min={1}
            {...register('cidade')}
          ></AddressInput>
          <UFInput
            placeholder="UF"
            min={2}
            max={2}
            {...register('uf')}
          ></UFInput>
        </ConnectContainer>
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
          <button
            type="button"
            disabled={paymentOption === 'Cartão de Crédito'}
            onClick={() => handleSetPaymentOption('Cartão de Crédito')}
          >
            <CreditCard size={16} color="#8047F8" />
            <p>CARTÃO DE CRÉDITO</p>
          </button>
          <button
            type="button"
            disabled={paymentOption === 'Cartão de Débito'}
            onClick={() => handleSetPaymentOption('Cartão de Débito')}
          >
            <Bank size={16} color="#8047F8" />
            <p>CARTÃO DE DÉBITO</p>
          </button>
          <button
            type="button"
            disabled={paymentOption === 'Dinheiro'}
            onClick={() => handleSetPaymentOption('Dinheiro')}
          >
            <Money size={16} color="#8047F8" />
            <p>DINHEIRO</p>
          </button>
        </PaymentOptionsContainer>
      </FormContainer>
    </OrderInfoContainer>
  )
}
