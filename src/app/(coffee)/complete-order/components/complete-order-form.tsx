import { SectionTitle } from "@/components/section-title";
import { Input } from "@/components/ui/input";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export const CompleteOrderForm = () => {
  const { register, formState } = useFormContext();

  return (
    <div className="flex flex-col gap-3 w-[40rem]">
      <h1 className="text-title-xs text-base-subtitle font-bold font-baloo">
        Complete seu pedido
      </h1>

      <div className="w-full bg-base-card rounded-[6px] p-10 flex flex-col gap-8">
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido."
          icon={<MapPinLine color="#C47F17" size={22} />}
        />

        {/* <AddressForm /> */}
        <div className="grid grid-cols-[12.5rem_17.25rem_3.75rem] grid-flow-dense gap-x-3 gap-y-4 w-full">
          <Input
            placeholder="CEP"
            type="text"
            className="col-span-3 max-w-[12.5rem]"
            {...register("cep")}
          />
        </div>
      </div>

      <div className="w-full bg-base-card rounded-[6px] p-10 flex flex-col gap-8">
        <SectionTitle
          title="Método de pagamento"
          subtitle="Escolha a forma de pagamento que deseja utilizar."
          icon={<CurrencyDollar color="#8047F8" size={22} />}
        />

        {/* <PaymentMethodOptions /> */}
      </div>
    </div>
  );
};
