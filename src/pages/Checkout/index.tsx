import { useForm, FormProvider } from 'react-hook-form'
import { OrderInfo } from './components/OrderInfo'
import { useNavigate } from 'react-router-dom'

import {
  SelectedInfo,
  SelectInfoText,
  SelectInfoTotal,
  Container,
  SelectionContainer,
  CoffeeCard,
  ConfirmButton,
  OrderInfoContainer,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/useCart'
import { SelectedCoffee } from './components/SelectedCoffee'

const newFormValidationSchema = z.object({
  cep: z.string().min(8).max(8),
  rua: z.string().min(1),
  numero: z.string().min(1),
  complemento: z.string(),
  bairro: z.string().min(1),
  cidade: z.string().min(1),
  uf: z.string().min(2).max(2),
})

type NewFormData = z.infer<typeof newFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const newForm = useForm<NewFormData>({
    resolver: zodResolver(newFormValidationSchema),
  })

  const { handleSubmit } = newForm

  const { cartItems } = useContext(CartContext)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    )
  }, [cartItems])

  function handleFormSubmit(data: NewFormData) {
    console.log(data)
    navigate('/success')
  }

  return (
    <Container>
      <OrderInfoContainer
        onSubmit={handleSubmit(handleFormSubmit)}
        action="/success"
      >
        <FormProvider {...newForm}>
          <OrderInfo />
        </FormProvider>
        <SelectionContainer>
          <h1>Cafés selecionados</h1>
          <CoffeeCard>
            {cartItems.map((item) => (
              <SelectedCoffee key={item.id} {...item} />
            ))}
            <SelectedInfo>
              <SelectInfoText>
                <p>Total de itens</p>
                <p>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(total)}
                </p>
              </SelectInfoText>
              <SelectInfoText>
                <p>Entrega</p>
                <p>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(total * 0.1)}
                </p>
              </SelectInfoText>
              <SelectInfoTotal>
                <p>Total</p>
                <p>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(total + total * 0.1)}
                </p>
              </SelectInfoTotal>
            </SelectedInfo>
            <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
          </CoffeeCard>
        </SelectionContainer>
      </OrderInfoContainer>
    </Container>
  )
}
