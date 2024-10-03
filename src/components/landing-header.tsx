import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

export const Header = async () => {
  const user = await currentUser();

  return (
    <header className="header-container">
      <div className="w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center gap-1 font-baloo text-xl font-extrabold text-base-text"
          >
            <Image
              src="/assets/wagon-logo.svg"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-brand-yellow ml-1">wagon</span> delivery
          </Link>
        </div>

        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className="flex items-center justify-center gap-6">
            <li className="hover:text-foreground/70 text-sm">
              <Link href="/">Entregador</Link>
            </li>
            <li className="hover:text-foreground/70 text-sm">
              <Link href="/">Restaurante & Mercado</Link>
            </li>
            <li className="hover:text-foreground/70 text-sm">
              <Link href="/">Carreiras</Link>
            </li>
            <li className="hover:text-foreground/70 text-sm">
              <Link href="/">Wagon Card</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <UserButton />
          ) : (
            <>
              <Link
                href="/sign-up"
                className={buttonVariants({
                  className:
                    "hidden md:flex text-brand-yellow font-baloo font-extrabold text-[16px] hover:text-brand-yellow-dark hover:bg-transparent",
                  variant: "ghost",
                })}
              >
                Criar conta
              </Link>
              <Link href="/sign-in">
                <Button className="bg-brand-yellow hover:bg-brand-yellow-dark text-white font-baloo text-[16px]">
                  Entrar
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
