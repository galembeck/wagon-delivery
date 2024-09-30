import { FormInput } from "@/components/form-input";
import { SectionTitle } from "@/components/section-title";
import { ErrorsType } from "@/types";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export const CompleteOrderForm = () => {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

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
          <FormInput
            type="number"
            placeholder="CEP"
            className="col-span-3 max-w-[12.5rem]"
            {...register("cep")}
            error={errors.cep?.message}
          />
          <br />
          <FormInput
            placeholder="Rua"
            className="col-span-3"
            {...register("street")}
            error={errors.street?.message}
          />
          <FormInput
            type="number"
            placeholder="Número"
            {...register("number")}
            error={errors.number?.message}
          />
          <FormInput
            placeholder="Complemento"
            className="col-span-2"
            {...register("complement")}
            error={errors.complement?.message}
            rightText="Opcional"
          />
          <FormInput
            placeholder="Bairro"
            {...register("district")}
            error={errors.district?.message}
          />
          <FormInput
            placeholder="Cidade"
            {...register("city")}
            error={errors.city?.message}
          />
          <FormInput
            placeholder="UF"
            {...register("uf")}
            error={errors.uf?.message}
          />

          {/* <Input
            placeholder="CEP"
            type="text"
            className="col-span-3 max-w-[12.5rem]"
            {...register("cep")}
          /> */}
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
