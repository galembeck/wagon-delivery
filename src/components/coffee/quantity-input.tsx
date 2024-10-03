"use client";

import { QuantityInputProps } from "@/types";
import { Minus, Plus } from "phosphor-react";

export const QuantityInput = ({
  size = "medium",
  quantity,
  onIncrease,
  onDecrease,
}: QuantityInputProps) => {
  return (
    <div
      className={`flex items-center justify-between flex-1 gap-1 rounded-[6px] bg-base-button ${
        size === "medium" ? "p-2" : "py-[0.3rem] px-2"
      }`}
    >
      <button
        className="w-[0.875rem] h-[0.875rem] border-none bg-none text-brand-purple transition disabled:opacity-[0.4] hover:text-brand-purple-dark"
        disabled={quantity <= 1}
        onClick={onDecrease}
      >
        <Minus size={14} weight="fill" />
      </button>
      <input
        className="ml-[2px] text-center w-full bg-transparent border-none text-base-title focus:outline-none"
        type="number"
        readOnly
        value={quantity}
      />
      <button
        className="w-[0.875rem] h-[0.875rem] border-none bg-none text-brand-purple transition disabled:opacity-[0.4] hover:text-brand-purple-dark"
        onClick={onIncrease}
      >
        <Plus size={14} weight="fill" />
      </button>
    </div>
  );
};
