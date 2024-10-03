import { rootCategories } from "@/constants";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

export default function RootPage() {
  return (
    <div className="w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8">
      <header className="flex flex-col items-center justify-center py-10">
        <h1 className="text-5xl font-bold mb-4 font-baloo text-base-title">
          Peça o que quiser com <span className="text-brand-yellow">Wagon</span>
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Entregamos tudo o que você deseja diretamente na porta da sua casa! De
          cafés especiais e selecionados a deliciosos pratos dos melhores
          restaurantes parceiros, estamos prontos para lhe atender a qualquer
          hora do dia.
        </p>

        <div className="flex items-center mb-6">
          <div className="flex gap-2 items-center justify-center pl-2 bg-base-input rounded-[6px]">
            <Search stroke="#DBAC2C" />
            <input
              type="text"
              placeholder="Em qual endereço você está?"
              className="border border-border p-3 w-96 rounded-r-md bg-base-input placeholder:font-baloo"
            />
          </div>
          <button className="bg-brand-yellow hover:bg-brand-yellow-dark transition text-white px-6 py-3 ml-4 rounded-md font-baloo">
            Ver restaurantes próximos
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {rootCategories.map((category) => (
            <button
              key={category}
              className="border border-gray-300 rounded-full px-5 py-2 text-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <div className="flex justify-center py-16 bg-base-background">
        <Link
          href="/coffee"
          className="flex items-center justify-center bg-brand-purple hover:bg-brand-purple-dark transition text-white rounded-lg p-6 m-4 gap-1 w-80 h-fit"
        >
          <h2 className="font-baloo font-bold text-regular-lg">Coffee Wagon</h2>
          <p className="flex gap-1 items-center justify-center">
            | Explorar
            <ArrowRight className="w-5 h-5" />
          </p>
          {/* <Image
            src="/assets/coffee/coffees/americano.png" // Substituir com a URL da imagem correta
            alt="Restaurante"
            width={32}
            height={32}
            className="mb-4"
          /> */}
        </Link>

        <Link
          href="/food"
          className="flex items-center justify-center bg-brand-yellow-dark hover:bg-brand-yellow transition text-white rounded-lg p-6 m-4 gap-1 w-80 h-fit"
        >
          <h2 className="font-baloo font-bold text-regular-lg">Food Wagon</h2>
          <p className="flex gap-1 items-center justify-center">
            | Explorar
            <ArrowRight className="w-5 h-5" />
          </p>
          {/* <Image
            src="/assets/coffee/coffees/americano.png" // Substituir com a URL da imagem correta
            alt="Restaurante"
            width={32}
            height={32}
            className="mb-4"
          /> */}
        </Link>
      </div>
    </div>
  );
}
