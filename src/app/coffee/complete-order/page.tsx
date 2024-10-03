/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useCart } from "@/hooks/useCart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { CompleteOrderForm } from "./components/complete-order-form";
import { SelectedCoffees } from "./components/selected-coffees";
import { useOrderContext } from "@/contexts/order-context";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = z.object({
  cep: z.string().min(1, "Informe o CEP"),
  street: z.string().min(1, "Informe o rua"),
  number: z.string().min(1, "Informe o número"),
  complement: z.string(),
  district: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  uf: z.string().min(1, "Informe a UF"),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento." };
    },
  }),
});

export type OrderData = z.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export default function CompleteOrderPage() {
  const router = useRouter();
  const { setOrderData } = useOrderContext();

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;
  const { cleanCart } = useCart();

  const handleConfirmOrder = (data: ConfirmOrderFormData) => {
    cleanCart();
    setOrderData(data);
    router.push("/coffee/order-confirmed");
  };

  return (
    <FormProvider {...confirmOrderForm}>
      <form
        className="flex flex-col lg:flex-row justify-between gap-8 mt-10 w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </form>
    </FormProvider>
  );
}
