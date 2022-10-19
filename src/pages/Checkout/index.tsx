import { useForm } from 'react-hook-form'
import { OrderInfo } from './components/OrderInfo'
import { Selection } from './components/Selection'
import { Container } from './styles'

export function Checkout() {
  const { register, handleSubmit } = useForm()

  return (
    <Container>
      <OrderInfo register={register} />
      <Selection handleSubmit={handleSubmit} />
    </Container>
  )
}
