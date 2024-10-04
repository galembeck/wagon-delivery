import { FlashFoodCard } from "@/components/food/flash-food-card";
import { Button } from "@/components/ui/button";
import { flashFood } from "@/constants";
import { Pizza, Search } from "lucide-react";
import Image from "next/image";

export const FoodIntro = () => {
  return (
    <div>
      <section className="w-full h-[74rem] items-center justify-center relative -mt-14">
        <div className="w-full h-[38.75rem] bg-[#FFBF0E] absolute" />

        <div className="flex items-center justify-between gap-14 w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8 flex-col min-[900px]:flex-row relative">
          <div>
            <div>
              <h1 className="text-5xl font-baloo text-base-title font-extrabold mb-[1rem] sm:mt-20">
                Encontre a refeição perfeita para qualquer hora do dia
              </h1>
              <p className="text-base font-roboto text-base-subtitle font-normal text-pretty">
                Com o serviço exclusivo de <strong>Food Delivery</strong> da{" "}
                <strong>Wagon</strong>, você pode desfrutar de pratos saborosos
                e frescos, onde quer que esteja, e a qualquer hora do dia, com
                apenas alguns cliques.
                <br />
                <br />
                Explore nossa <strong>
                  seleção de pratos
                </strong> cuidadosamente <strong>preparadas</strong> por nosso
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
            src="/assets/food/intro-2.png"
            alt="Food"
            width={476}
            height={476}
            className="min-[1120px]:block hidden relative top-14"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center p-8 mt-20 sm:mt-36 max-[639px]:mt-44">
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
    </div>
  );
};
