import { SectionTitleProps } from "@/types";

export const SectionTitle = ({ title, subtitle, icon }: SectionTitleProps) => {
  return (
    <div className="flex gap-2">
      {icon}

      <div>
        <h2 className="text-title-xs text-base-subtitle font-bold font-baloo">
          {title}
        </h2>
        <p className="text-regular-sm text-base-text font-normal font-roboto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
