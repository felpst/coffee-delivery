import {
  Badge,
  ButtonCart,
  Cart,
  HeaderContainer,
  HeaderSpace,
  LocationContainer,
} from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <nav>
          <LocationContainer href="">
            <MapPin size={22} weight="fill" color="#8047f8" />
            <p>Curitiba, PR</p>
          </LocationContainer>
          <Cart>
            <ButtonCart to={'/checkout'}>
              <ShoppingCart size={22} weight="fill" color="#C47F17" />
            </ButtonCart>
            <Badge>2</Badge>
          </Cart>
        </nav>
      </HeaderContainer>
      <HeaderSpace />
    </>
  )
}
