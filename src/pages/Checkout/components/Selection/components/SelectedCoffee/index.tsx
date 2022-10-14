import { Minus, Plus, Trash } from 'phosphor-react'
import { CounterButton } from '../../../../../Home/components/ListItem/styles'
import {
  ButtonsContainer,
  CoffeeItem,
  CoffeeItemInfo,
  CoffeeItemPrice,
  Container,
  Line,
  RemoveButton,
  SelectionContainer,
  SelectionItem,
} from './styles'
import { CartContext, ItemProps } from '../../../../../../contexts/useCart'
import { useContext, useState } from 'react'

export function SelectedCoffee({
  id,
  price,
  quantity,
  image,
  name,
}: ItemProps) {
  const { updateItemQuantity, removeItemFromCart } = useContext(CartContext)
  const [trueQuantity, setTrueQuantity] = useState(quantity)

  function handleChangeQuantity(updatedQuantity: number) {
    setTrueQuantity(updatedQuantity)
    updateItemQuantity(id, updatedQuantity)
  }

  function handleIncrement() {
    handleChangeQuantity(quantity + 1)
  }

  function handleDecrement() {
    if (quantity > 1) {
      handleChangeQuantity(quantity - 1)
    }
  }

  function handleRemoveItem() {
    removeItemFromCart(id)
  }

  return (
    <Container>
      <SelectionContainer>
        <SelectionItem>
          <CoffeeItem>
            <div>
              <img src={image} alt="" />
            </div>
            <CoffeeItemInfo>
              <div>
                <p>{name}</p>
              </div>
              <ButtonsContainer>
                <CounterButton>
                  <button onClick={handleDecrement}>
                    <Minus size={14} weight="bold" color="#8047F8" />
                  </button>
                  <span>{trueQuantity}</span>
                  <button onClick={handleIncrement}>
                    <Plus size={14} weight="bold" color="#8047F8" />
                  </button>
                </CounterButton>
                <RemoveButton onClick={handleRemoveItem}>
                  <Trash size={16} weight="regular" color="#8047F8" />
                  REMOVER
                </RemoveButton>
              </ButtonsContainer>
            </CoffeeItemInfo>
          </CoffeeItem>
          <CoffeeItemPrice>
            {' '}
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(trueQuantity * price)}
          </CoffeeItemPrice>
        </SelectionItem>
      </SelectionContainer>
      <Line />
    </Container>
  )
}
