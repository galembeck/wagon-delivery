import { Baloo_2, Roboto } from "next/font/google";

import { wagonMetadata } from "@/config";

import "../styles/globals.css";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = wagonMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${baloo2.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
