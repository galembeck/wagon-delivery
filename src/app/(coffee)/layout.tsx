import { Header } from "@/components/coffee/header";
import { Footer } from "@/components/coffee/footer";

import "./styles/styles.css";
import { CartContextProvider } from "@/contexts/cart-context";

export default async function CoffeeDeliveryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main suppressHydrationWarning>
      <CartContextProvider>
        <header>
          <Header />
        </header>

        <div className="mt-[9.8rem]">{children}</div>

        <footer>
          <Footer />
        </footer>
      </CartContextProvider>
    </main>
  );
}
