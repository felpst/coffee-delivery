import { OrderInfo } from './components/OrderInfo'
import { Selection } from './components/Selection'
import { Container } from './styles'

export function Checkout() {
  return (
    <Container>
      <OrderInfo />
      <Selection />
    </Container>
  )
}
