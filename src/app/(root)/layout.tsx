export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main suppressHydrationWarning>
      <div className="mt-[9.8rem]">{children}</div>
    </main>
  );
}
