import { FoodIntro } from "./components/food-intro";
import { FoodList } from "./components/food-list";
import { InformationalDetails } from "./components/informational-details";

export default function FoodWagonPage() {
  return (
    <main>
      <FoodIntro />
      <FoodList />

      <InformationalDetails />
    </main>
  );
}
