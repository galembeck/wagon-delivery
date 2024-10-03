"use client";

import Link from "next/link";
import Image from "next/image";

import {
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  Heart,
} from "phosphor-react";
import { FooterProps } from "@/types";

export const Footer = ({ type }: FooterProps) => {
  return (
    <footer className="footer-container">
      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-start">
            <Link href="/coffee">
              {type === "coffee" ? (
                <Image
                  src="/assets/coffee/coffee-logo.svg"
                  alt="Logo"
                  width={180}
                  height={38}
                />
              ) : (
                <Image
                  src="/assets/food/food-wagon-logo.svg"
                  alt="Logo"
                  width={180}
                  height={38}
                />
              )}
            </Link>
          </div>
          {type === "coffee" ? (
            <p className="text-base-text/70 mt-4 text-sm text-start">
              Explore nossa seleção de cafés premium, frescos, de espressos
              ricos a lattes cremosos e tudo o que há entre eles. Se você
              precisa de um estimulante matinal ou um reforço à tarde, nós temos
              tudo o que você precisa.
            </p>
          ) : (
            <p className="text-base-text/70 mt-4 text-sm text-start">
              Explore nossa seleção de pratos irresistíveis, preparados com
              ingredientes frescos e variados, de refeições caseiras a delícias
              gourmet e tudo o que há entre elas. Seja para um almoço rápido ou
              um jantar especial, temos tudo o que você precisa para satisfazer
              seu apetite.
            </p>
          )}
          <div className="mt-4 flex items-center justify-center gap-2">
            <Link href="https://instagram.com/galembeckx">
              <InstagramLogo size={30} color="#DD2A7B" weight="fill" />
            </Link>
            <Link href="/">
              <TwitterLogo size={30} color="#08A0E9" weight="fill" />
            </Link>
            <Link href="https://www.linkedin.com/in/pedro-galembeck/">
              <LinkedinLogo size={30} color="#0077B5" weight="fill" />
            </Link>
          </div>
        </div>

        <div className="grid-cols-2 gap-8 grid xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-lg font-bold text-base-title">
                Wagon Delivery
              </h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Sobre nós
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Seja um entregador
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Carreiras profissionais
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Trabalhe conosco
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-lg font-bold text-base-title">Contato</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Ajuda & Suporte
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Parceria
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Time
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-lg font-bold text-base-title">Legal</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Termos & Condições
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Reembolso & Cancelamento
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-lg font-bold text-base-title">Soluções</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Wagon Delivery
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/coffee"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Coffee Wagon
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/food"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Food Wagon
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Registre sua loja/restaurante
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-base-text mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} Wagon Delivery. Todos os direitos
          reservados.
        </p>
        <span className="text-base-text text-sm flex items-center mt-8 md:mt-0 pb-5">
          Made with
          <Heart size={14} color="#8047F8" weight="fill" className="mx-1" />
          by
          <Link
            href="https://puc-campinas.edu.br"
            className="ml-1 mr-1 text-brand-purple hover:text-brand-purple-dark"
          >
            PUC-Campinas
          </Link>
          students
        </span>
      </div>
    </footer>
  );
};
