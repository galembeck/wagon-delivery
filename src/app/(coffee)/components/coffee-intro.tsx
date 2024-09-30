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
              Com o serviço exclusivo de <strong>Coffee Delivery</strong> da{" "}
              <strong>Wagon</strong>, você pode desfrutar do café perfeito, onde
              quer que esteja, e a qualquer hora do dia, com apenas alguns
              cliques.
              <br />
              <br />
              Explore nossa <strong>
                seleção de produtos
              </strong> cuidadosamente <strong>selecionados</strong> logo
              abaixo.
              <br />
              Escolha seus favoritos e adicione-os ao carrinho com facilidade.
              Para completar sua compra, basta acessar a{" "}
              <strong>página do carrinho</strong>
              , inserir seu endereço de entrega e escolher o método de pagamento
              de sua preferência.
              <br />
              <br />
              Agora é só <strong>relaxar e aguardar</strong>. Seu{" "}
              <strong>café fresquinho</strong> estará <strong>a caminho</strong>
              , trazendo o sabor e a energia que você precisa, onde e quando
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
          className="min-[1120px]:block hidden"
        />
      </div>
    </section>
  );
};
