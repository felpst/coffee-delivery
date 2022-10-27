import React, { createContext, useContext, useState } from 'react'
import { NewFormData } from '../pages/Checkout'

type OrderInfoProps = {
  data: NewFormData
  paymentOption: string
}

type OrderContextProps = {
  setOrderInfo: (data: OrderInfoProps) => void
  getOrderInfo(): OrderInfoProps | undefined
}

export const OrderContext = createContext({} as OrderContextProps)

export type OrderProviderProps = {
  children: React.ReactNode
}

function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState<OrderInfoProps>()

  function setOrderInfo({ data, paymentOption }: OrderInfoProps) {
    setOrder({ data, paymentOption })
  }

  function getOrderInfo() {
    return order
  }

  return (
    <OrderContext.Provider
      value={{
        setOrderInfo,
        getOrderInfo,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

const useOrder = () => useContext(OrderContext)

export { OrderProvider, useOrder }
