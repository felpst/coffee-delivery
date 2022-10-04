import { SelectedCoffee } from './components/SelectedCoffee'
import {
  CoffeeCard,
  ConfirmButton,
  Container,
  SelectedInfo,
  SelectInfoText,
  SelectInfoTotal,
} from './styles'

export function Selection() {
  return (
    <Container>
      <h1>Cafés selecionados</h1>
      <CoffeeCard>
        <SelectedCoffee />
        <SelectedCoffee />
        <SelectedCoffee />
        <SelectedInfo>
          <SelectInfoText>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </SelectInfoText>
          <SelectInfoText>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </SelectInfoText>
          <SelectInfoTotal>
            <p>Total</p>
            <p>R$ 33,20</p>
          </SelectInfoTotal>
        </SelectedInfo>
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </CoffeeCard>
    </Container>
  )
}
