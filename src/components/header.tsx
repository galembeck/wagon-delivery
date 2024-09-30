"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useUserLocation } from "@/hooks/useUserLocation";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "@/hooks/useCart";

export const Header = () => {
  const { userRegion, userCountry } = useUserLocation();
  const { cartQuantity } = useCart();

  // Check if component is mounted (to avoid hydration warnings)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

        {/* Only render dynamic content after the component is mounted */}
        {isMounted && (
          <div className="header-buttons-container">
            <div className="flex items-center justify-center relative gap-1 min-w-9 h-9 rounded-[6px] p-2 bg-brand-purple-light">
              <MapPin size={20} weight="fill" className="text-brand-purple" />
              <p className="text-base font-normal text-brand-purple-dark">
                {userRegion}, {userCountry}
              </p>
            </div>

            <div className="flex items-center justify-center relative gap-1 min-w-9 h-9 rounded-[6px] p-2 bg-brand-yellow-light">
              {cartQuantity >= 1 && (
                <div className="flex items-center justify-center absolute top-[calc(-1.25rem/2)] right-[calc(-1.25rem/2)] w-5 h-5 rounded-[50%] bg-brand-yellow-dark text-base-white text-[0.75rem] font-bold">
                  {cartQuantity}
                </div>
              )}
              <Link href="/complete-order">
                <ShoppingCart
                  size={20}
                  weight="fill"
                  className="text-brand-yellow-dark"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
