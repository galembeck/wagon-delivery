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
