import { BenefitCardProps } from "@/types";
import Image from "next/image";

const colorClasses: { [key: string]: string } = {
  "brand-yellow-dark": "bg-brand-yellow-dark",
  "base-text": "bg-base-text",
  "brand-yellow": "bg-brand-yellow",
  "brand-purple": "bg-brand-purple",
};

export const BenefitCard = ({ icon, benefit, iconBg }: BenefitCardProps) => {
  const bgColorClass = colorClasses[iconBg] || "bg-base-text";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-8 h-8 rounded-[50%] ${bgColorClass} text-base-white flex flex-shrink-0 items-center justify-center`}
      >
        <Image src={icon} alt="Icon" width={16} height={16} />
      </div>
      <p className="font-semibold text-base-text text-base">{benefit}</p>
    </div>
  );
};
