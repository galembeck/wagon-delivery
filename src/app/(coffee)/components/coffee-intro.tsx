import { BenefitCard } from "@/components/benefit-card";
import { coffeeDeliveryBenefits } from "@/constants";
import Image from "next/image";

export const CoffeeIntro = () => {
  return (
    <section className="coffee-intro-container relative">
      <Image
        src="/assets/coffee-delivery/coffee-intro-background.png"
        alt="Background"
        width={0}
        height={544}
        className="w-full absolute max-h-[34rem]"
      />

      <div className="flex items-center justify-between gap-14 w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8 flex-col min-[900px]:flex-row relative">
        <div>
          <div>
            <h1 className="text-5xl font-baloo text-base-title font-extrabold mb-[1rem]">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-base font-roboto text-base-subtitle font-normal text-pretty">
              Com o serviço exclusivo de{" "}
              <span className="text-base-title font-bold">Coffee Delivery</span>{" "}
              da <span className="text-base-title font-bold">Wagon</span>, você
              pode desfrutar do café perfeito, onde quer que esteja, e a
              qualquer hora do dia, com apenas alguns cliques.
              <br />
              <br />
              Explore nossa{" "}
              <span className="text-base-title font-bold">
                seleção de produtos
              </span>{" "}
              cuidadosamente{" "}
              <span className="text-base-title font-bold">selecionados</span>{" "}
              logo abaixo.
              <br />
              Escolha seus favoritos e adicione-os ao carrinho com facilidade.
              Para completar sua compra, basta acessar a{" "}
              <span className="text-base-title font-bold">
                página do carrinho
              </span>
              , inserir seu endereço de entrega e escolher o método de pagamento
              de sua preferência.
              <br />
              <br />
              Agora é só{" "}
              <span className="text-base-title font-bold">
                relaxar e aguardar
              </span>
              . Seu{" "}
              <span className="text-base-title font-bold">café fresquinho</span>{" "}
              estará{" "}
              <span className="text-base-title font-bold">a caminho</span>,
              trazendo o sabor e a energia que você precisa, onde e quando
              quiser!
            </p>
          </div>

          <div className="w-full grid grid-cols-2 max-[500px]:grid-cols-1 gap-5 mt-14">
            {coffeeDeliveryBenefits.map((item) => (
              <BenefitCard
                key={item.benefit}
                icon={item.icon}
                benefit={item.benefit}
                iconBg={item.iconBg}
              />
            ))}
          </div>
        </div>

        <Image
          src="/assets/coffee-delivery/coffee-intro.png"
          alt="Coffee"
          width={476}
          height={360}
          // className="min-[900px]:block hidden"
        />
      </div>
    </section>
  );
};
