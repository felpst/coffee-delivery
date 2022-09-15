import coffeeBanner from '../../assets/coffeeBanner.svg'
import {
  HomeContainer,
  IconBrown,
  IconYellow,
  IntroContainer,
  IntroItemContainer,
  IntroText,
} from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

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
            <div>
              <IconBrown>
                <ShoppingCart size={16} weight="fill" color="#fff" />
              </IconBrown>
              <span>Compre simples e segura</span>
            </div>
            <div>
              <IconYellow>
                <Package size={16} weight="fill" color="#fff" />
              </IconYellow>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer size={16} weight="fill" color="#fff" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee size={16} weight="fill" color="#fff" />
              <span>O café chega fresquinho até você</span>
            </div>
          </IntroItemContainer>
        </IntroText>
        <img src={coffeeBanner} alt="" />
      </IntroContainer>
    </HomeContainer>
  )
}
