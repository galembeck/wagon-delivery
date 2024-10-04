import Image from "next/image";
import { FoodIntro } from "./components/food-intro";
import { DeliveryDetails } from "./components/delivery-details";

export default function FoodWagonPage() {
  return (
    <main>
      <FoodIntro />

      <DeliveryDetails />
    </main>
  );
}
