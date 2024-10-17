import { SectionTitle } from "@/components/coffee/section-title";

import { AddressForm } from "./address-form";
import { PaymentMethodOptions } from "./payment-method-options";

import { CurrencyDollar, MapPinLine } from "phosphor-react";

export const CompleteOrderForm = () => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[40rem] pb-16 max-auto">
      <h1 className="text-title-xs text-base-subtitle font-bold font-baloo">
        Complete seu pedido
      </h1>

      <div className="w-full flex flex-col gap-8 bg-base-card rounded-[6px] p-10">
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido."
          icon={<MapPinLine color="#C47F17" size={22} />}
        />

        <AddressForm />
      </div>

      <div className="w-full bg-base-card rounded-[6px] p-10 flex flex-col gap-8">
        <SectionTitle
          title="Método de pagamento"
          subtitle="Escolha a forma de pagamento que deseja utilizar."
          icon={<CurrencyDollar color="#8047F8" size={22} />}
        />

        <PaymentMethodOptions />
      </div>
    </div>
  );
};
