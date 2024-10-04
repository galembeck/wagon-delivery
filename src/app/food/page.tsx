import { DeliveryDetails } from "./components/delivery-details";
import { FoodIntro } from "./components/food-intro";
import { HowItWorks } from "./components/how-it-works";

export default function FoodWagonPage() {
  return (
    <main>
      <FoodIntro />
      <HowItWorks />
      <DeliveryDetails />
    </main>
  );
}
