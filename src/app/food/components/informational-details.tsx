import { InformationalDetailsCard } from "@/components/food/informational-details-card";

import { deliveryDetails } from "@/constants";

export const InformationalDetails = () => {
  return (
    <section className="w-full mt-14 p-8">
      <div className="max-w-[70rem] mr-auto ml-auto">
        <div>
          {deliveryDetails.map((detail, index) => (
            <InformationalDetailsCard
              key={index}
              title={detail.title}
              highlight={detail.highlight}
              description={detail.description}
              buttonText={detail.buttonText}
              image={detail.image}
              reverse={detail.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
