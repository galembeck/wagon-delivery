import { Baloo_2, Roboto } from "next/font/google";

import { wagonMetadata } from "@/config";

import { CartContextProvider } from "@/contexts/cart-context";
import { OrderContextProvider } from "@/contexts/order-context";

import { ClerkProvider } from "@clerk/nextjs";

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
      <CartContextProvider>
        <OrderContextProvider>
          <body className={`${baloo2.variable} ${roboto.variable} antialiased`}>
            <ClerkProvider>{children}</ClerkProvider>
          </body>
        </OrderContextProvider>
      </CartContextProvider>
    </html>
  );
}
