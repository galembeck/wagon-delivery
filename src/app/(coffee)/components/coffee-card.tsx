"use client";

import { useState } from "react";

import { CoffeeInformation } from "@/types";
import { formatPrice } from "@/utils/format-price";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface CoffeeCardProps {
  coffeeInformation: CoffeeInformation;
}
export const CoffeeCard = ({ coffeeInformation }: CoffeeCardProps) => {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }
  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  // const { addCoffeeToCart } = useCart();

  // function handleAddToCart() {
  //   const coffeeToAdd = {
  //     ...coffeeInformation,
  //     quantity,
  //   };
  //   addCoffeeToCart(coffeeToAdd);
  // }

  const formattedPrice = formatPrice(coffeeInformation.price);

  return (
    <div className="flex flex-col items-center w-full bg-base-card rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px] p-5 pt-0 text-center">
      <Image
        src={`/assets/coffee-delivery/coffees/${coffeeInformation.photo}`}
        alt={coffeeInformation.name}
        width={120}
        height={120}
        className="-mt-5"
      />

      <div className="flex items-center justify-center w-full gap-1 mt-4 mb-5 flex-wrap">
        {coffeeInformation.tags.map((tag) => (
          <Badge
            key={`${coffeeInformation.id}${tag}`}
            className="bg-brand-yellow-light hover:bg-brand-yellow/20 text-brand-yellow-dark text-[0.625rem] uppercase py-1 px-2 rounded-full font-bold"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <h3 className="text-base-subtitle text-xl font-bold font-baloo mb-2">
        {coffeeInformation.name}
      </h3>
      <p className="text-base-label text-sm font-normal mb-8">
        {coffeeInformation.description}
      </p>
    </div>
  );
};
