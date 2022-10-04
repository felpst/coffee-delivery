import { Minus, Plus, Trash } from 'phosphor-react'
import { CounterButton } from '../../../../../Home/components/ListItem/styles'
import coffee from '../../../../../../assets/coffee.svg'
import {
  ButtonsContainer,
  CoffeeItem,
  CoffeeItemInfo,
  CoffeeItemPrice,
  Container,
  Line,
  RemoveButton,
  SelectionContainer,
  SelectionItem,
} from './styles'

export function SelectedCoffee() {
  return (
    <Container>
      <SelectionContainer>
        <SelectionItem>
          <CoffeeItem>
            <div>
              <img src={coffee} alt="" />
            </div>
            <CoffeeItemInfo>
              <div>
                <p>Expresso Tradicional</p>
              </div>
              <ButtonsContainer>
                <CounterButton>
                  <button>
                    <Minus size={14} weight="bold" color="#8047F8" />
                  </button>
                  <span>0</span>
                  <button>
                    <Plus size={14} weight="bold" color="#8047F8" />
                  </button>
                </CounterButton>
                <RemoveButton>
                  <Trash size={16} weight="regular" color="#8047F8" />
                  REMOVER
                </RemoveButton>
              </ButtonsContainer>
            </CoffeeItemInfo>
          </CoffeeItem>
          <CoffeeItemPrice>R$ 9,90</CoffeeItemPrice>
        </SelectionItem>
      </SelectionContainer>
      <Line />
    </Container>
  )
}
