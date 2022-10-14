import {
  BuyDashboardContainer,
  CoffeeListItem,
  CounterButton,
  Price,
  Tag,
  TagsList,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/useCart'

type ListItemProps = {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  image: string
}

export function ListItem({
  id,
  description,
  image,
  name,
  price,
  tags,
}: ListItemProps) {
  const { addItemToCart } = useContext(CartContext)
  const [counter, setCounter] = useState(0)

  function handleIncrement() {
    setCounter((props) => props + 1)
  }

  function handleDecrement() {
    if (counter > 0) {
      setCounter((props) => props - 1)
    }
  }

  function handleAddItem() {
    if (counter > 0) {
      addItemToCart({ id, price, quantity: counter, image, name })
    }
  }

  return (
    <CoffeeListItem>
      <img src={image} alt="" />

      <TagsList>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsList>

      <span>{name}</span>
      <p>{description}</p>
      <BuyDashboardContainer>
        <Price>
          <p>R$</p>
          <span>{price}0</span>
        </Price>
        <div>
          <CounterButton>
            <button onClick={handleDecrement}>
              <Minus size={14} weight="bold" color="#8047F8" />
            </button>
            <span>{counter}</span>
            <button onClick={handleIncrement}>
              <Plus size={14} weight="bold" color="#8047F8" />
            </button>
          </CounterButton>
          <button onClick={handleAddItem}>
            <ShoppingCartSimple size={16} weight="fill" color="#ffffff" />
          </button>
        </div>
      </BuyDashboardContainer>
    </CoffeeListItem>
  )
}
