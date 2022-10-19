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
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/useCart'

export function Header() {
  const { cartItems } = useContext(CartContext)
  const [cartSize, setCartSize] = useState(0)

  useEffect(() => {
    setCartSize(cartItems.reduce((acc, item) => acc + item.quantity, 0))
  }, [cartItems])

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
            <Badge>{cartSize}</Badge>
          </Cart>
        </nav>
      </HeaderContainer>
      <HeaderSpace />
    </>
  )
}
