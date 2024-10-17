"use client";

import { useFormContext } from "react-hook-form";

import { PaymentMethodInput } from "@/components/payment-method-input";

import { Bank, CreditCard, Money } from "phosphor-react";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro / PIX",
    icon: <Money size={16} />,
  },
};

export const PaymentMethodOptions = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <div className="grid grid-cols-3 gap-3">
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}

      {paymentMethodError && (
        <p className="col-span-3 text-base-error">{paymentMethodError}</p>
      )}
    </div>
  );
};
