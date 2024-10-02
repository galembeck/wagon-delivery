/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useCart } from "@/hooks/useCart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { CompleteOrderForm } from "./components/complete-order-form";
import { useCallback } from "react";
import { SelectedCoffees } from "./components/selected-coffees";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOderFormValidationSchema = z.object({
  cep: z.string().min(1, "Informe o CEP"),
  street: z.string().min(1, "Informe o rua"),
  number: z.string().min(1, "Informe o número"),
  complement: z.string(),
  district: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  uf: z.string().min(1, "Informe a UF"),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = z.infer<typeof confirmOderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export default function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;

  const { cleanCart } = useCart();

  const handleConfirmOrder = (data: ConfirmOrderFormData) => {
    const router = useRouter();

    // Use o `useCallback` para memorizar a função
    const confirmOrder = useCallback(() => {
      // Redirecione para a página de confirmação, passando dados como query params ou localStorage
      router.push({
        pathname: "/order-confirmed",
        query: data,
      });

      // Limpa o carrinho após a navegação
      cleanCart();
    }, [router, data, cleanCart]);

    return confirmOrder;
  };

  // function handleConfirmOrder(data: ConfirmOrderFormData) {
  //   return (
  //     <>
  //       <Link href={{ pathname: "/order-confirmed", query: data }} />
  //     </>
  //   );
  //   cleanCart();
  // }

  return (
    <FormProvider {...confirmOrderForm}>
      <form
        className="flex justify-between gap-8 mt-10 w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </form>
    </FormProvider>
  );
}
