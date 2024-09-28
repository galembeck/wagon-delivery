/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "title-xl": "3rem",
        "title-lg": "2rem",
        "title-md": "1.5rem",
        "title-sm": "1.2rem",
        "title-xs": "1.125rem",
        "regular-lg": "1.25rem",
        "bold-lg": "1.25rem",
        "regular-md": "1rem",
        "bold-md": "1rem",
        "regular-sm": "0.875rem",
        "bold-sm": "0.75rem",
        tag: "0.625rem",
        "button-lg": "0.875rem",
        "button-sm": "0.75rem",
      },
      fontFamily: {
        baloo: "var(--font-baloo)",
        roboto: "var(--font-roboto)",
      },
      colors: {
        base: {
          white: "#FFFFFF",
          background: "#FAFAFA",
          card: "#F3F2F2",
          input: "#EDEDED",
          button: "#E6E5E5",
          hover: "#D7D5D5",
          label: "#8D8686",
          text: "#574F4D",
          subtitle: "#403937",
          title: "#272221",
          error: "#f84747",
        },
        brand: {
          "purple-dark": "#4B2995",
          purple: "#8047F8",
          "purple-light": "#EBE5F9",
          "yellow-dark": "#C47F17",
          yellow: "#DBAC2C",
          "yellow-light": "#F1E9C9",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
