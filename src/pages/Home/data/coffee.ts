import americano from './assets/Type=Americano.svg'
import tradicional from './assets/Type=Expresso.svg'
import cremoso from './assets/Type=ExpressoCremoso.svg'
import gelado from './assets/Type=CafeGelado.svg'

export const coffees = [
  {
    id: 1,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: { americano },
  },
  {
    id: 2,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: { tradicional },
  },
  {
    id: 3,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    image: { cremoso },
  },
  {
    id: 4,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: { gelado },
  },
]
