"use client";

import Image from "next/image";
import Link from "next/link";

import { useUserLocation } from "@/hooks/useUserLocation";

import { MapPin, ShoppingCart } from "phosphor-react";

export const Header = () => {
  const { userRegion, userCountry } = useUserLocation();

  return (
    <header className="header-container">
      <div className="w-full max-w-[70rem] mr-auto ml-auto max-[1120px]:p-8 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/coffee-delivery/coffee-delivery-logo.svg"
            alt="Logo"
            width={85}
            height={40}
            priority
          />
        </Link>

        <div className="header-buttons-container">
          <div className="flex items-center justify-center relative gap-1 min-w-9 h-9 rounded-[6px] p-2 bg-brand-purple-light">
            <MapPin size={20} weight="fill" className="text-brand-purple" />
            <p className="text-base font-normal text-brand-purple-dark">
              {userRegion}, {userCountry}
            </p>
          </div>

          <Link
            href="/complete-order"
            className="flex items-center justify-center relative gap-1 min-w-9 h-9 rounded-[6px] p-2 bg-brand-yellow-light"
          >
            {/* {cartQuantity >= 1 && <span>{cartQuantity}</span>} */}
            <ShoppingCart
              size={20}
              weight="fill"
              className="text-brand-yellow-dark"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
