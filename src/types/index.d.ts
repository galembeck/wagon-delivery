import { ReactNode } from "react";

export interface BenefitCardProps {
  icon: string;
  benefit: string | ReactNode;
  iconBg: string;
}

export interface CoffeeInformation {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export interface CartItem extends CoffeeInformation {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

export interface CartContextProviderProps {
  children: ReactNode;
}

export interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}
