import { Header } from "@/components/header";

import { Footer } from "@/components/footer";

export default async function CoffeeWagonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main suppressHydrationWarning>
      <header>
        <Header type="coffee" />
      </header>

      <div className="mt-[9.8rem]">{children}</div>

      <footer>
        <Footer type="coffee" />
      </footer>
    </main>
  );
}
