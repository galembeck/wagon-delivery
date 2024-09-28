import { Metadata } from "next";

export const wagonConfig = {
  title: {
    default: "Wagon Delivery | Coffee & Food Delivery",
    template: `%s | Wagon Delivery`,
  },
  url: "https://wagon-delivery.vercel.app",
  description:
    "Wagon Delivery is a sleek and modern delivery platform offering fast and efficient service for gourmet coffee and food, delivered straight to your door. The website features an easy-to-use interface where customers can browse through a curated menu of artisanal coffees, freshly prepared meals, and snacks.",
  locale: "pt_BR", // en_US
  icons: {
    icon: [
      {
        url: "../app/favicon.ico",
        href: "../app/favicon.ico",
      },
    ],
  },
};

export const wagonMetadata: Metadata = {
  metadataBase: new URL(wagonConfig.url),
  title: {
    default: wagonConfig.title.default,
    template: wagonConfig.title.template,
  },
  description: wagonConfig.description,
  openGraph: {
    title: `${wagonConfig.title.default}`,
    description: wagonConfig.description,
    url: wagonConfig.url,
    siteName: `${wagonConfig.title.default}`,
    locale: wagonConfig.locale,
    type: "website",
  },
};
