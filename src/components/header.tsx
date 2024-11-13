"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { useUserLocation } from "@/hooks/useUserLocation";
import { useCart } from "@/hooks/useCart";

import { HeaderProps } from "@/types";

import { MapPin, ShoppingCart } from "phosphor-react";

export const Header = ({ type }: HeaderProps) => {
  const { userRegion, userCountry } = useUserLocation();
  const { cartQuantity } = useCart();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="header-container">
      <div className="w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8 flex items-center justify-between">
        <Link href="/">
          {type === "coffee" ? (
            <Image
              src="/assets/coffee/coffee-logo.svg"
              alt="Logo"
              width={180}
              height={38}
              priority
            />
          ) : (
            <Image
              src="/assets/food/food-wagon-logo.svg"
              alt="Logo"
              width={180}
              height={38}
              priority
            />
          )}
        </Link>

        {isMounted && (
          <div className="header-buttons-container">
            <div
              className={`flex items-center justify-center relative gap-1 min-w-9 h-9 rounded-[6px] p-2 ${
                type === "coffee"
                  ? "bg-brand-purple-light"
                  : "bg-brand-yellow-light"
              }`}
            >
              <MapPin
                size={20}
                weight="fill"
                className={`${
                  type === "coffee" ? "text-brand-purple" : "text-brand-yellow"
                } max-[428px]:hidden`}
              />
              <p
                className={`text-base font-normal ${
                  type === "coffee"
                    ? "text-brand-purple-dark"
                    : "text-brand-yellow-dark"
                }`}
              >
                {userRegion}, {userCountry}
              </p>
            </div>

            <div
              className={`flex items-center justify-center relative gap-1 min-w-9 h-9 rounded-[6px] p-2 ${
                type === "coffee"
                  ? "bg-brand-yellow-light"
                  : "bg-brand-purple-light"
              }`}
            >
              {cartQuantity >= 1 && (
                <div
                  className={`flex items-center justify-center absolute top-[calc(-1.25rem/2)] right-[calc(-1.25rem/2)] w-5 h-5 rounded-[50%] ${
                    type === "coffee"
                      ? "bg-brand-yellow-dark"
                      : "bg-brand-purple-dark"
                  } text-base-white text-[0.75rem] font-bold`}
                >
                  {cartQuantity}
                </div>
              )}
              <Link href="/complete-order">
                <ShoppingCart
                  size={20}
                  weight="fill"
                  className={`${
                    type === "coffee"
                      ? "text-brand-yellow-dark"
                      : "text-brand-purple-dark"
                  }`}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
