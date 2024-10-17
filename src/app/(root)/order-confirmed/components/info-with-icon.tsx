import { InfoWithIconProps } from "@/types";

const colorClasses: { [key: string]: string } = {
  "brand-purple": "bg-brand-purple",
  "brand-yellow": "bg-brand-yellow",
  "brand-yellow-dark": "bg-brand-yellow-dark",
};

export const InfoWithIcon = ({
  icon,
  text,
  iconBg,
  weight,
}: InfoWithIconProps) => {
  const bgColorClass = colorClasses[iconBg] || "bg-brand-purple";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center justify-center min-w-[2rem] min-h-[2rem] rounded-[50%] ${bgColorClass} text-white`}
      >
        {icon}
      </div>
      <p
        className={`text-base-title font-baloo font-${
          weight ? weight : "font-semibold"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
