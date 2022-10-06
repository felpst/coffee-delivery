import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/illustration.svg'
import { Container, Title } from './styles'

export function Success() {
  return (
    <Container>
      <div>
        <Title>
          <h1>Uhu! Pedido Confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Title>
        <div>
          <div>
            <div>
              <MapPin weight="fill" size={24} />
            </div>
            <div>
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div>
            <div>
              <Timer weight="fill" size={24} />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <b>20 min - 30 min</b>
              </p>
            </div>
          </div>
          <div>
            <div>
              <CurrencyDollar size={24} />
            </div>
            <div>
              <p>Pagamento na entraga</p>
              <p>
                <b>Cartão de Crédito</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={illustration} alt="" />
    </Container>
  )
}
