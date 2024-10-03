"use client";

import React, { createContext, useContext, useState } from "react";

interface OrderData {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  uf: string;
  paymentMethod: string;
}

const OrderContext = createContext<{
  orderData: OrderData | null;
  setOrderData: (data: OrderData) => void;
}>({
  orderData: null,
  setOrderData: () => {},
});

export const OrderContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  return (
    <OrderContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
