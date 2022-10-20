import { useForm } from 'react-hook-form'
import { OrderInfo } from './components/OrderInfo'
import { Selection } from './components/Selection'
import { Container } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const newFormValidationSchema = z.object({
  cep: z.string().min(8).max(8),
  rua: z.string(),
  numero: z.number(),
  complemento: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string().min(2).max(2),
})

export function Checkout() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(newFormValidationSchema),
  })

  return (
    <Container>
      <OrderInfo register={register} />
      <Selection handleSubmit={handleSubmit} />
    </Container>
  )
}
