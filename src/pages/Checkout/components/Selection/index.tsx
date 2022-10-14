import { useContext, useState } from 'react'
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

export function Selection() {
  const { cartItems, calculateTotal } = useContext(CartContext)

  function updatePrice() {
    return calculateTotal().toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  const [total, setTotal] = useState(updatePrice())

  function handleTotal() {
    setTotal(updatePrice())
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
            <p>{total}</p>
          </SelectInfoText>
          <SelectInfoText>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </SelectInfoText>
          <SelectInfoTotal>
            <p>Total</p>
            <p>R$ 33,20</p>
          </SelectInfoTotal>
        </SelectedInfo>
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </CoffeeCard>
    </Container>
  )
}
