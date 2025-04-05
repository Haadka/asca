import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Primary colors from the ASCA logo
        // primary: {
        //   DEFAULT: "#006400", // Dark Green
        //   foreground: "#FFFFFF",
        // },
        // secondary: {
        //   DEFAULT: "#C41E3A", // Red
        //   foreground: "#FFFFFF",
        // },
        // accent: {
        //   DEFAULT: "#FFD700", // Gold/Yellow
        //   foreground: "#000000",
        // },
        // Neutral colors
        // background: "#FFFFFF",
        // foreground: "#333333",
        // muted: {
        //   DEFAULT: "#F5F5F5", // Light Gray
        //   foreground: "#666666",
        // },
        // border: "#E2E8F0",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["Garamond", "Times New Roman", "serif"],
        sans: ["Montserrat", "Lato", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(0, 100, 0, 0.7), rgba(0, 100, 0, 0.5)), url('/placeholder.svg?height=1080&width=1920')",
        "somaliland-pattern": "url('/placeholder.svg?height=200&width=200')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

