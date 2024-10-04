import { DetailsCard } from "@/components/food/details-card";
import { deliveryDetails } from "@/constants";

export const DeliveryDetails = () => {
  return (
    <section className="w-full max-[1120px]:p-8 pb-20 -mt-20 max-[1151px]:mt-48 max-[607px]:mt-[700px] max-[435px]:mt-[750px]">
      <div className="max-w-[70rem] mr-auto ml-auto">
        <div>
          {deliveryDetails.map((detail, index) => (
            <DetailsCard
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
