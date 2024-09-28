import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./styles/styles.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main suppressHydrationWarning>
      <header>
        <Header />
      </header>

      <div className="mt-[9.8rem]">{children}</div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
