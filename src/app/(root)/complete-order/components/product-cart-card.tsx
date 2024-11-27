"use client";

import Image from "next/image";

import { QuantityInput } from "@/components/coffee/quantity-input";
import { Button } from "@/components/ui/button";

import { formatPrice } from "@/utils/format-price";

import { useCart } from "@/hooks/useCart";

import { ProductCartCardProps } from "@/types";

import { Trash } from "phosphor-react";

export const ProductCartCard = ({ product }: ProductCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(product.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(product.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(product.id);
  }

  const cartTotal = product.price * product.quantity;
  const formattedPrice = formatPrice(cartTotal);

  return (
    <div className="flex items-center justify-between w-full border-b border-base-button pb-6 mb-6">
      <div className="flex items-center gap-5">
        {product.type === "coffee" ? (
          <Image
            src={`/assets/coffee/coffees/${product.photo}`}
            alt="Coffee"
            width={64}
            height={64}
          />
        ) : (
          <Image
            src={`/assets/food/food/${product.photo}`}
            alt="Food"
            width={64}
            height={64}
          />
        )}

        <div>
          <p className="text-base-subtitle font-baloo font-bold text-regular-md self-start">
            {product.name}
          </p>

          <div className="flex items-center gap-2 mt-2 h-8">
            <div className="max-w-[5.5rem] h-full">
              <QuantityInput
                size="small"
                type="coffee"
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={product.quantity}
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
