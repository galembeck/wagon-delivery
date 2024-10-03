import { Header } from "@/components/landing-header";

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
    </main>
  );
}
