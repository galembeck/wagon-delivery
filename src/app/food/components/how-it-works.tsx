import { HowItWorksCard } from "@/components/food/how-it-works-card";
import { howItWorks } from "@/constants";

export const HowItWorks = () => {
  return (
    <section className="w-full max-w-[70rem] mx-auto flex flex-col items-center justify-center -mt-20 mb-64 max-[1151px]:mt-[230px] max-[1151px]:mb-0 max-[607px]:mt-[900px]">
      <h1 className="text-center mb-8 font-baloo font-bold text-orange-500 text-title-lg">
        How does it work
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {howItWorks.map((item, index) => (
          <HowItWorksCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
