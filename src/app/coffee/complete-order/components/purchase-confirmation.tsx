import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/format-price";

const DELIVERY_PRICE = 3.5;

export const PurchaseConfirmation = () => {
  const { cartItemsTotal, cartQuantity } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemsTotal;
  const formattedItemsTotal = formatPrice(cartItemsTotal);
  const formattedCartTotal = formatPrice(cartTotal);
  const formattedDeliveryPrice = formatPrice(DELIVERY_PRICE);

  return (
    <section className="flex flex-col gap-[0.8rem]">
      <div className="flex items-center justify-between">
        <p className="text-regular-sm font-roboto font-normal text-base-text">
          Total de produtos
        </p>
        <p className="text-regular-md font-roboto font-normal text-base-text">
          R$ {formattedItemsTotal}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-regular-sm font-roboto font-normal text-base-text">
          Taxa de entrega
        </p>
        <p className="text-regular-md font-roboto font-normal text-base-text">
          R$ {formattedDeliveryPrice}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-regular-lg font-roboto font-bold text-base-subtitle">
          Total
        </p>
        <p className="text-regular-md font-roboto font-normal text-base-text">
          R$ {formattedCartTotal}
        </p>
      </div>

      <Button
        disabled={cartQuantity <= 0}
        type="submit"
        className="w-[368px] h-[46px] uppercase text-center bg-brand-yellow font-bold text-button-lg text-base-white hover:bg-brand-yellow-dark"
      >
        Confirmar pedido
      </Button>
    </section>
  );
};
