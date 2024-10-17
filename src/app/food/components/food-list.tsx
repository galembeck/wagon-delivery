import { ProductCard } from "@/components/product-card";

import { foodList } from "@/constants";

export const FoodList = () => {
  return (
    <section className="w-full mt-10 py-8 max-[625px]:py-32 max-[516px]:py-64 max-[476px]:py-72 max-[417px]:py-[300px] max-[452px]:py-[350px] max-[416px]:py-[400px] max-[1120px]:p-8 pb-20">
      <div className="max-w-[70rem] mr-auto ml-auto">
        <h1 className="text-base-subtitle text-title-lg font-baloo font-extrabold border-b border-border">
          Nossos produtos
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8 mt-14">
          {foodList.map((product) => (
            <ProductCard
              key={product.id}
              productInformation={product}
              type="food"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
