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
        className="hidden appearance-none checked:bg-brand-purple-light border-brand-purple hover:bg-brand-purple-light"
      />
      <label
        htmlFor={id}
        className="bg-brand-purple-light border-brand-purple hover:bg-brand-purple-light"
      >
        <div className="flex items-center justify-start bg-base-button text-base-text px-4 h-12 gap-3 text-xs font-semibold uppercase rounded-[6px] border-base-button transition hover:bg-base-hover cursor-pointer font-baloo font-smeibold">
          <p className="text-brand-purple">{icon}</p>
          {label}
        </div>
      </label>
    </div>
  );
});
