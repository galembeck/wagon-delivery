"use client";

import { useState } from "react";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { QuantityInput } from "@/components/coffee/quantity-input";

import { useCart } from "@/hooks/useCart";

import { formatPrice } from "@/utils/format-price";

import { ProductCardProps } from "@/types";

import { ShoppingCart } from "phosphor-react";

export const ProductCard = ({ productInformation, type }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }
  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const { addProductToCart } = useCart();

  function handleAddToCart() {
    const productToAdd = {
      ...productInformation,
      quantity,
    };
    addProductToCart(productToAdd);
  }

  const formattedPrice = formatPrice(productInformation.price);

  return (
    <div className="flex flex-col items-center w-full bg-base-card rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px] p-5 pt-0 text-center">
      {type === "coffee" ? (
        <Image
          src={`/assets/coffee/coffees/${productInformation.photo}`}
          alt={productInformation.name}
          width={120}
          height={120}
          className="-mt-5"
        />
      ) : (
        <Image
          src={`/assets/food/food/${productInformation.photo}`}
          alt={productInformation.name}
          width={120}
          height={120}
          className="-mt-5"
        />
      )}

      <div className="flex items-center justify-center w-full gap-1 mt-4 mb-5 flex-wrap">
        {productInformation.tags.map((tag) => (
          <Badge
            key={`${productInformation.id}${tag}`}
            className="bg-brand-yellow-light hover:bg-brand-yellow/20 text-brand-yellow-dark text-[0.625rem] uppercase py-1 px-2 rounded-full font-bold"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <h3 className="text-base-subtitle text-xl font-bold font-baloo mb-2">
        {productInformation.name}
      </h3>
      <p className="text-base-label text-sm font-normal mb-8">
        {productInformation.description}
      </p>

      <div className="flex items-center justify-between w-full mt-auto pb-2">
        <div className="flex items-center gap-[3px]">
          <p className="text-regular-sm text-base-text font-roboto">R$</p>
          <p className="text-title-md text-base-text font-extrabold font-baloo">
            {formattedPrice}
          </p>
        </div>

        <div className="flex w-[8rem] items-center">
          <QuantityInput
            type={type}
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          <button
            className={`flex items-center justify-center w-[2.375rem] h-[2.375rem] border-none ${
              type === "coffee"
                ? "bg-brand-purple-dark"
                : "bg-brand-yellow-dark"
            } text-base-card rounded-[6px] ml-[0.3rem] transition-colors ${
              type === "coffee"
                ? "hover:bg-brand-purple"
                : "hover:bg-brand-yellow"
            }`}
            onClick={handleAddToCart}
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
};
