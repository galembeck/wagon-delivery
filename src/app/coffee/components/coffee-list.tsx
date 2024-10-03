import { coffeesList } from "@/constants";
import { CoffeeCard } from "../../../components/coffee/information-card";

export const CoffeeList = () => {
  return (
    // w-full h-[6.5rem] bg-base-background flex items-center justify-center fixed top-0 left-0 z-50
    <section className="w-full mt-10 py-8 max-[625px]:py-32 max-[516px]:py-64 max-[476px]:py-72 max-[417px]:py-[300px] max-[452px]:py-[350px] max-[416px]:py-[400px] bg-base-background max-[1120px]:p-8 pb-20">
      <div className="max-w-[70rem] mr-auto ml-auto">
        <h1 className="text-base-subtitle text-title-lg font-baloo font-extrabold border-b border-border">
          Nossos produtos
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8 mt-14">
          {coffeesList.map((product) => (
            <CoffeeCard key={product.id} productInformation={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
