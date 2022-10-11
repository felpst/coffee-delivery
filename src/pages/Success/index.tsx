import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/illustration.svg'
import {
  Circle,
  Container,
  OrderInfoContainer,
  OrderInfoItem,
  Title,
} from './styles'

export function Success() {
  return (
    <Container>
      <div>
        <Title>
          <h1>Uhu! Pedido Confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Title>
        <OrderInfoContainer>
          <OrderInfoItem>
            <Circle circleColor="purple">
              <MapPin weight="fill" size={16} color="#fff" />
            </Circle>
            <div>
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </OrderInfoItem>
          <OrderInfoItem>
            <Circle circleColor="yellow">
              <Timer weight="fill" size={16} color="#fff" />
            </Circle>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <b>20 min - 30 min</b>
              </p>
            </div>
          </OrderInfoItem>
          <OrderInfoItem>
            <Circle circleColor="dark_yellow">
              <CurrencyDollar size={16} color="#fff" />
            </Circle>
            <div>
              <p>Pagamento na entraga</p>
              <p>
                <b>Cartão de Crédito</b>
              </p>
            </div>
          </OrderInfoItem>
        </OrderInfoContainer>
      </div>
      <img src={illustration} alt="" />
    </Container>
  )
}
