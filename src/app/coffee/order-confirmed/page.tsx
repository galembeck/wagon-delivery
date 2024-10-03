/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useOrderContext } from "@/contexts/order-context";
import { useRouter } from "next/navigation";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useEffect } from "react";
import { InfoWithIcon } from "./components/info-with-icon";
import Image from "next/image";

export default function OrderConfirmedPage() {
  const { orderData } = useOrderContext();

  const router = useRouter();
  useEffect(() => {
    if (!orderData) {
      router.push("/");
    }
  }, [orderData, router]);

  if (!orderData) {
    return null;
  }

  const { street, number, district, city, uf, paymentMethod } = orderData;

  const paymentMethodLabels: Record<string, string> = {
    credit: "Cartão de Crédito",
    debit: "Cartão de Débito",
    money: "Dinheiro",
  };

  return (
    <div className="w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8 flex flex-col gap-10 mt-20 pb-20">
      <div>
        <h1 className="text-title-lg font-baloo font-extrabold text-brand-yellow-dark">
          Uhu! Pedido confirmado...
        </h1>
        <p className="text-regular-md font-roboto font-normal text-base-subtitle">
          Agora é só aguardar que logo nosso café chegará até seu endereço de
          entrega.
        </p>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-7 p-10 w-full max-w-[32rem] rounded-[6px_36px_6px_36px] bg-base-background relative linear-gradient-box">
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={"brand-purple"}
            text={
              <p>
                <strong>
                  {street}, {number} - {district}{" "}
                </strong>
                | {city}, {uf}
              </p>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={"brand-yellow"}
            text={
              <p>
                Previsão de entrega: <strong>20 min - 30 min</strong>
              </p>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={"brand-yellow-dark"}
            text={
              <p>
                Método de pagamento:{" "}
                <strong>{paymentMethodLabels[paymentMethod]}</strong>
              </p>
            }
          />
        </div>

        <Image
          src="/assets/coffee/confirmed-order.svg"
          alt="Confirmed order"
          className="lg:max-w-[50%] lg:order-2 mt-16 lg:mt-0"
          width={492}
          height={293}
        />
      </section>
    </div>
  );
}