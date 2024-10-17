import Image from "next/image";

import { Button } from "../ui/button";

import { InformationalDetailsCardProps } from "@/types";

export const InformationalDetailsCard = ({
  title,
  highlight,
  description,
  buttonText,
  image,
  reverse = false,
}: InformationalDetailsCardProps) => {
  return (
    <div
      className={`flex ${
        reverse ? "lg:flex-row" : "lg:flex-row-reverse"
      } bg-white shadow-lg rounded-lg overflow-hidden mb-20 flex-col items-center justify-center`}
    >
      <div className="w-full lg:w-[75%]">
        <Image
          src={image}
          alt={title}
          width={900}
          height={512}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="px-14 py-6 lg:py-0 lg:w-1/2 flex flex-col gap-14 justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[36px]">
            {title} <span className="text-brand-yellow">{highlight}</span>
          </h2>

          <p className="text-gray-700 mb-4">{description}</p>
        </div>

        <Button className="bg-brand-yellow text-white font-baloo font-bold text-base px-6 py-6 rounded-[6px] hover:bg-brand-yellow-dark transition lg:mt-0 uppercase shadow-brand-yellow-dark shadow-lg">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
