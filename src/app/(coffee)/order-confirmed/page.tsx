/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { MapPin } from "phosphor-react";
import { InfoWithIcon } from "./components/info-with-icon";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function OrderConfirmedPage() {
  const searchParams = useSearchParams(); // Obtendo os parâmetros de busca
  const router = useRouter();

  // Extraindo os dados da query usando searchParams
  const cep = searchParams.get("cep");
  const street = searchParams.get("street");
  const number = searchParams.get("number");
  const complement = searchParams.get("complement");
  const district = searchParams.get("district");
  const city = searchParams.get("city");
  const uf = searchParams.get("uf");
  const paymentMethod = searchParams.get("paymentMethod");

  useEffect(() => {
    // Verifica se não há dados do pedido e redireciona para a página inicial
    if (!cep || !street || !number || !district || !city || !uf) {
      router.push("/"); // Redireciona para a página inicial ou para outra página que você preferir
    }
  }, [cep, street, number, district, city, uf, router]);

  // Se a compra não estiver confirmada, não renderize nada
  if (!cep || !street || !number || !district || !city || !uf) {
    return null; // Não renderiza nada se a condição não for satisfeita
  }

  return (
    <div className="w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8 flex flex-col gap-10 mt-20">
      <div>
        <h1 className="text-title-lg font-baloo font-extrabold text-brand-yellow-dark">
          Uhu! Pedido confirmado...
        </h1>
        <p className="text-regular-md font-roboto font-normal text-base-subtitle">
          Agora é só aguardar que logo nosso café chegará até seu endereço de
          entrega.
        </p>
      </div>

      <section className="flex items-center justify-between">
        <div className="flex flex-col gap-8 p-10 min-w-[32rem] rounded-[6px_36px_6px_36px] bg-base-background relative linear-gradient-box">
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={"brand-purple"}
            text={
              <p>
                Entrega em{" "}
                <strong>{`${street}, ${number} ${
                  complement ? `, ${complement}` : ""
                }, ${district} - ${city}, ${uf} (${cep})`}</strong>
              </p>
            }
          />
        </div>
      </section>
    </div>
  );
}
