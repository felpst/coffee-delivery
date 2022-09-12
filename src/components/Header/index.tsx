import { HeaderContainer, LocationContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <LocationContainer href="">
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </LocationContainer>
        <a href="">
          <ShoppingCart size={22} weight="fill" />
        </a>
      </nav>
    </HeaderContainer>
  )
}
