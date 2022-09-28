import coffee from '../../assets/coffee.svg'

import {
  BuyDashboardContainer,
  CoffeeListItem,
  CounterButton,
  Price,
  Tag,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function ListItem() {
  return (
    <CoffeeListItem>
      <img src={coffee} alt="" />
      <Tag>Tradicional</Tag>
      <span>Nome do café</span>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <BuyDashboardContainer>
        <Price>
          <p>R$</p>
          <span>0,00</span>
        </Price>
        <div>
          <CounterButton>
            <button>
              <Minus size={14} weight="bold" color="#8047F8" />
            </button>
            <span>0</span>
            <button>
              <Plus size={14} weight="bold" color="#8047F8" />
            </button>
          </CounterButton>
          <button>
            <ShoppingCartSimple size={16} weight="fill" color="#ffffff" />
          </button>
        </div>
      </BuyDashboardContainer>
    </CoffeeListItem>
  )
}
