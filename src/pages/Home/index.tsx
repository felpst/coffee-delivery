import coffeeBanner from '../../assets/coffeeBanner.svg'
import coffee from '../../assets/coffee.svg'
import {
  BuyDashboardContainer,
  CoffeeListContainer,
  CoffeeListItem,
  CoffeeListItemsContainer,
  CounterButton,
  HomeContainer,
  IconBrown,
  IconGray,
  IconPurple,
  IconYellow,
  IntroContainer,
  IntroItemContainer,
  IntroText,
  Item,
  Price,
  Tag,
} from './styles'

import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <IntroItemContainer>
            <Item>
              <IconBrown>
                <ShoppingCart size={16} weight="fill" color="#fff" />
              </IconBrown>
              <span>Compra simples e segura</span>
            </Item>
            <Item>
              <IconGray>
                <Package size={16} weight="fill" color="#fff" />
              </IconGray>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item>
              <IconYellow>
                <Timer size={16} weight="fill" color="#fff" />
              </IconYellow>
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item>
              <IconPurple>
                <Coffee size={16} weight="fill" color="#fff" />
              </IconPurple>
              <span>O café chega fresquinho até você</span>
            </Item>
          </IntroItemContainer>
        </IntroText>
        <img src={coffeeBanner} alt="" />
      </IntroContainer>
      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <CoffeeListItemsContainer>
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
        </CoffeeListItemsContainer>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
