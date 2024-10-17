import Image from "next/image";

import { FlashFoodCard } from "@/components/food/flash-food-card";
import { Button } from "@/components/ui/button";

import { flashFood, howItWorks } from "@/constants";

import { Pizza, Search } from "lucide-react";
import { HowItWorksCard } from "@/components/food/how-it-works-card";

export const FoodIntro = () => {
  return (
    <div>
      <section className="w-full items-center justify-center relative">
        <div className="w-full h-[42rem] bg-[#FFBF0E] absolute max-[1120px]:h-[42rem] max-[1023px]:h-[35rem] max-[768px]:h-[32rem] max-[480px]:h-[30rem]" />

        <div className="flex items-center justify-between gap-14 w-full max-w-[70rem] mx-auto p-8 flex-col lg:flex-row relative lg:-mt-36 max-[1023px]:-mt-40 max-w-[640px]:mt-24 py-20 max-[639px]:-mt-14">
          <div>
            <div>
              <h1 className="text-5xl font-baloo text-base-title font-extrabold mb-4 sm:mt-20 max-[768px]:text-3xl max-[480px]:text-2xl">
                Encontre a refeição perfeita para qualquer hora do dia
              </h1>
              <p className="text-base font-roboto text-base-subtitle font-normal text-pretty max-[768px]:text-sm">
                Com o serviço exclusivo de <strong>Food Delivery</strong> da{" "}
                <strong>Wagon</strong>, você pode desfrutar de pratos saborosos
                e frescos, onde quer que esteja, e a qualquer hora do dia, com
                apenas alguns cliques.
                <br />
                <br />
                Explore nossa <strong>
                  seleção de pratos
                </strong> cuidadosamente <strong>preparados</strong> por nosso
                restaurantes parceiros.
              </p>

              <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg mt-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center w-full bg-base-input rounded-full">
                    <span className="text-gray-500 text-xl px-4">
                      <Pizza stroke="#FF7474" />
                    </span>
                    <input
                      type="text"
                      placeholder="Procurando por algo específico?"
                      className="w-full py-4 pr-4 bg-base-input focus:outline-none rounded-r-full font-baloo placeholder:text-md"
                    />
                  </div>
                  <Button className="h-12 w-44 gap-1.5 bg-gradient-to-br from-[#FF7474] to-[#F65900]">
                    <Search size={16} />
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/assets/food/food-intro.png"
            alt="Food"
            width={476}
            height={476}
            className="lg:block hidden relative top-14"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center p-8 mt-10">
          {flashFood.map((food, index) => (
            <FlashFoodCard
              key={index}
              image={food.image}
              name={food.name}
              restaurant={food.restaurant}
              remainingDays={food.remainingDays}
            />
          ))}
        </div>
      </section>

      <section className="w-full max-w-[70rem] mx-auto flex flex-col items-center justify-center mt-10">
        <h1 className="text-center mb-8 font-baloo font-bold text-orange-500 text-title-lg">
          Praticidade a alguns cliques
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
    </div>
  );
};
