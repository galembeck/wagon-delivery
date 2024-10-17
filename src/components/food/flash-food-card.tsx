import Image from "next/image";

import { FlashFoodCardProps } from "@/types";

export const FlashFoodCard = ({
  image,
  name,
  restaurant,
  remainingDays,
}: FlashFoodCardProps) => {
  return (
    <div className="max-w-[240px] rounded-lg shadow-lg overflow-hidden m-4">
      <Image
        src={image}
        alt={name}
        width={357}
        height={301}
        className="w-full object-cover"
      />

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base-title font-bold font-baloo text-regular-sm">
            {name}
          </h3>
          <p className="text-[#F17228] font-semibold font-baloo text-regular-sm">
            Válido até {remainingDays} dias
          </p>
        </div>
        <h3 className="text-base-title text-regular-md mt-1">{restaurant}</h3>
      </div>
    </div>
  );
};
