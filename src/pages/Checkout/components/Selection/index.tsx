import { useContext, useEffect, useState } from 'react'
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form'
import { CartContext } from '../../../../contexts/useCart'
import { SelectedCoffee } from './components/SelectedCoffee'
import {
  CoffeeCard,
  ConfirmButton,
  Container,
  SelectedInfo,
  SelectInfoText,
  SelectInfoTotal,
} from './styles'

type SelectionProps = {
  handleSubmit: UseFormHandleSubmit<FieldValues>
}

export function Selection({ handleSubmit }: SelectionProps) {
  const { cartItems } = useContext(CartContext)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    )
  }, [cartItems])

  function handleFormSubmit(data: any) {
    console.log(data)
  }

  return (
    <Container>
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
        <ConfirmButton href="/success" onClick={handleSubmit(handleFormSubmit)}>
          CONFIRMAR PEDIDO
        </ConfirmButton>
      </CoffeeCard>
    </Container>
  )
}
