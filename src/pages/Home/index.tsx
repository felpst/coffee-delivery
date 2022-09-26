import coffeeBanner from '../../assets/coffeeBanner.svg'
import {
  CoffeeListContainer,
  CoffeeListItemsContainer,
  HomeContainer,
  IconBrown,
  IconGray,
  IconPurple,
  IconYellow,
  IntroContainer,
  IntroItemContainer,
  IntroText,
  Item,
} from './styles'

import {
  Coffee,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'

import { ListItem } from '../../components/ListItem'

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
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </CoffeeListItemsContainer>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
