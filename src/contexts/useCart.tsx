import React, { createContext, useContext, useState } from 'react'

export type ItemProps = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

type CartContextProps = {
  cartItems: ItemProps[]
  addItemToCart(item: ItemProps): void
  removeItemFromCart(id: number): void
  updateItemQuantity(id: number, quantity: number): void
  clearCart(): void
  calculateTotal(): number
}

export const CartContext = createContext({} as CartContextProps)

export type CartProviderProps = {
  children: React.ReactNode
}

function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<ItemProps[]>([])

  function addItemToCart(item: ItemProps) {
    setCartItems([...cartItems, item])
  }

  function removeItemFromCart(id: number) {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  function updateItemQuantity(id: number, quantity: number) {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity,
          }
        }

        return item
      }),
    )
  }

  function clearCart() {
    setCartItems([])
  }

  function calculateTotal() {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        calculateTotal,
        clearCart,
        updateItemQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
