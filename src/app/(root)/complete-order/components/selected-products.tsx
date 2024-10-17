import { useCart } from "@/hooks/useCart";

import { PurchaseConfirmation } from "./purchase-confirmation";
import { CoffeeCartCard } from "./coffee-cart-card";

export const SelectedProducts = () => {
  const { cartItems } = useCart();

  return (
    <div className="flex flex-col gap-3 w-full max-w-[40rem] mx-auto">
      <h2 className="text-title-xs font-bold font-baloo text-base-subtitle">
        Produtos escolhidos
      </h2>

      <div className="w-full bg-base-card p-10 flex flex-col rounded-[6px_44px_6px_44px]">
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <PurchaseConfirmation />
      </div>
    </div>
  );
};
