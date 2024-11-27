import { InputHTMLAttributes, ReactNode } from "react";

export interface OptionCardProps {
  title: string;
  buttonText: string;
  image: string;
  bgColor: string;
}

export interface LandingHeaderProps {
  type: "default" | "order";
}

export interface HeaderProps {
  type: "coffee" | "food";
}

export interface FooterProps {
  type: "coffee" | "food";
}

export interface FlashFoodCardProps {
  image: string;
  name: string;
  restaurant: string;
  remainingDays: number;
}

export interface HowItWorksProps {
  title: string;
  description: string;
  image: string;
}

export interface InformationalDetailsCardProps {
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  image: string;
  reverse: boolean;
}

export interface BenefitCardProps {
  icon: string;
  benefit: string | ReactNode;
  iconBg: string;
}

export interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
  weight?: string | number;
}

export interface ProductInformation {
  id: number;
  type: string;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface QuantityInputProps {
  size?: "medium" | "small";
  type: "coffee" | "food";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export interface ProductCardProps {
  productInformation: ProductInformation;
  type: "coffee" | "food";
}

export interface CartItem extends ProductInformation {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addProductToCart: (product: CartItem) => void;
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

export interface ProductCartCardProps {
  product: CartItem;
  type: string;
}

export type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export interface LocationType {
  state: OrderData;
}
