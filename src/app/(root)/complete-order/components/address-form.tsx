import { useFormContext } from "react-hook-form";

import { AddressFormInput } from "@/components/address-form-input";

import { ErrorsType } from "@/types";

export const AddressForm = () => {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[12.5rem_17.25rem_3.75rem] grid-flow-dense gap-x-3 gap-y-4 w-full">
      <AddressFormInput
        placeholder="CEP"
        type="number"
        className="col-span-1 md:max-w-[12.5rem] md:col-span-3"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <AddressFormInput
        placeholder="Rua"
        className="col-span-1 md:col-span-3"
        {...register("street")}
        error={errors.street?.message}
      />
      <AddressFormInput
        placeholder="Número"
        type="number"
        className="col-span-1 md:col-span-1"
        {...register("number")}
        error={errors.number?.message}
      />
      <AddressFormInput
        placeholder="Complemento"
        className="col-span-1 md:col-span-2"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <AddressFormInput
        placeholder="Bairro"
        className="col-span-1 md:col-span-1"
        {...register("district")}
        error={errors.district?.message}
      />
      <AddressFormInput
        placeholder="Cidade"
        className="col-span-1 md:col-span-1"
        {...register("city")}
        error={errors.city?.message}
      />
      <AddressFormInput
        placeholder="UF"
        className="col-span-1 md:col-span-1"
        {...register("uf")}
        error={errors.uf?.message}
      />
    </div>
  );
};
