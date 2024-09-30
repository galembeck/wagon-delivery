import { CoffeeIntro } from "./components/coffee-intro";
import { CoffeeList } from "./components/coffee-list";

export default function CoffeeDeliveryPage() {
  return (
    <main>
      <CoffeeIntro />
      <CoffeeList />
    </main>
  );
}
