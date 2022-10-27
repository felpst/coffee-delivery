import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartProvider } from './contexts/useCart'
import { OrderProvider } from './contexts/useOrder'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <OrderProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </OrderProvider>
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
