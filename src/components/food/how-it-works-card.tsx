import Image from "next/image";

import { HowItWorksProps } from "@/types";

export const HowItWorksCard = ({
  title,
  description,
  image,
}: HowItWorksProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-left max-w-[200px] m-4 md:max-w-[400px]">
      <Image src={image} alt={title} width={85} height={112} />

      <div className="px-4 gap-3 text-center md:text-left">
        <h3 className="text-base-title font-bold font-baloo text-regular-md">
          {title}
        </h3>
        <p className="font-roboto text-regular-sm font-light">{description}</p>
      </div>
    </div>
  );
};
