"use client";

import { QuantityInput } from "@/components/coffee/quantity-input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { CoffeeCartCardProps } from "@/types";
import { formatPrice } from "@/utils/format-price";
import Image from "next/image";
import { Trash } from "phosphor-react";

export const CoffeeCartCard = ({ coffee }: CoffeeCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatPrice(coffeeTotal);

  return (
    <div className="flex items-center justify-between w-full border-b border-base-button pb-6 mb-6">
      <div className="flex items-center gap-5">
        <Image
          src={`/assets/coffee/coffees/${coffee.photo}`}
          alt="Coffee"
          width={64}
          height={64}
        />

        <div>
          <p className="text-base-subtitle font-baloo font-bold text-regular-md self-start">
            {coffee.name}
          </p>

          <div className="flex items-center gap-2 mt-2 h-8">
            <div className="max-w-[5.5rem] h-full">
              <QuantityInput
                size="small"
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={coffee.quantity}
              />
            </div>

            <Button
              className="flex items-center h-full gap-1 px-2 text-xs text-base-text bg-base-button rounded-[6px] transition hover:bg-base-hover"
              onClick={handleRemove}
            >
              <Trash size={16} className="text-brand-purple" />
              REMOVER
            </Button>
          </div>
        </div>
      </div>

      <p className="text-base-subtitle font-baloo font-bold text-regular-md self-start">
        R$ {formattedPrice}
      </p>
    </div>
  );
};
