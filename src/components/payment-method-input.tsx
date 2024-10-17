/* eslint-disable react/display-name */

import { forwardRef } from "react";

import { PaymentMethodInputProps } from "@/types";

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <div>
      <input
        id={id}
        ref={ref}
        {...props}
        type="radio"
        name="paymentMethod"
        className="hidden peer"
      />
      <label
        htmlFor={id}
        className="flex items-center justify-start bg-base-button text-base-text px-4 h-12 gap-3 text-xs font-semibold uppercase rounded-[6px] border border-base-button transition-colors duration-200 cursor-pointer font-baloo
        peer-checked:bg-brand-purple-light peer-checked:border-brand-purple hover:bg-base-hover"
      >
        <p className="text-brand-purple">{icon}</p>
        {label}
      </label>
    </div>
  );
});
