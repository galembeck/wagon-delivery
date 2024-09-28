import { coffeesList } from "@/constants";
import { CoffeeCard } from "./coffee-card";

export const CoffeeList = () => {
  return (
    <section className="w-full mt-8 max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8">
      <h1 className="text-base-subtitle text-title-lg font-baloo font-extrabold border-b border-border">
        Nossos produtos
      </h1>

      <div className="w-full grid grid-cols-4 gap-y-8 gap-x-10 mt-14">
        {coffeesList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffeeInformation={coffee} />
        ))}
      </div>
    </section>
  );
};
