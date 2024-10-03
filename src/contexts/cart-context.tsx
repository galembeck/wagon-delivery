"use client";

import { CartContextProviderProps, CartContextType, CartItem } from "@/types";
import { produce } from "immer";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({} as CartContextType);

const ITEMS_STORAGE_KEY = "wagonDelivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Verifica se estamos no lado do cliente antes de acessar o localStorage
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem(ITEMS_STORAGE_KEY);

      if (storedCartItems) {
        return JSON.parse(storedCartItems);
      }
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addProductToCart(product: CartItem) {
    const productAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyExistsInCart < 0) {
        draft.push(product);
      } else {
        draft[productAlreadyExistsInCart].quantity += product.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (productExistsInCart >= 0) {
        const item = draft[productExistsInCart];
        draft[productExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (productExistsInCart >= 0) {
        draft.splice(productExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCartItem,
        cartItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
