import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function FoodWagonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main suppressHydrationWarning>
      <header>
        <Header type="food" />
      </header>

      <div className="mt-[9.8rem]">{children}</div>

      <footer>
        <Footer type="food" />
      </footer>
    </main>
  );
}
