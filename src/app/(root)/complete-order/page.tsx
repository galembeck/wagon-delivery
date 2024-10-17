/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { FormProvider, useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";

import { useUser } from "@clerk/nextjs";

import { Header } from "@/components/landing-header";
import { CompleteOrderForm } from "./components/complete-order-form";
import { SelectedProducts } from "./components/selected-products";

import { useOrderContext } from "@/contexts/order-context";

import { useCart } from "@/hooks/useCart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
  pix = "pix",
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
  const { isSignedIn } = useUser();

  const router = useRouter();

  if (!isSignedIn) {
    router.push("/sign-in");
  }

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
    router.push("/order-confirmed");
  };

  return (
    <main>
      <header>
        <Header type="order" />
      </header>

      <FormProvider {...confirmOrderForm}>
        <form
          className="flex flex-col lg:flex-row justify-between gap-8 mt-10 w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8"
          onSubmit={handleSubmit(handleConfirmOrder)}
        >
          <CompleteOrderForm />
          <SelectedProducts />
        </form>
      </FormProvider>
    </main>
  );
}
