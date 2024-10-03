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
  const bgColorClass = colorClasses[iconBg] || "bg-base-text";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-[50%] ${bgColorClass} text-white`}
      >
        {icon}
        {typeof text === "string" ? (
          <p className={`text-base-text font-roboto font-${weight}`}>{text}</p>
        ) : (
          text
        )}
      </div>
    </div>
  );
};
