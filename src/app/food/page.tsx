import { DeliveryDetails } from "./components/delivery-details";
import { FoodIntro } from "./components/food-intro";

export default function FoodWagonPage() {
  return (
    <main>
      <FoodIntro />

      <DeliveryDetails />
    </main>
  );
}
