import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./**/**/**/*.{ts,tsx}",
    "./**/*.{ts,tsx}",
    "./*.{ts,tsx}",
    "../../apps/extension/**/**/**/*.{ts,tsx}",
    "../../packages/ui/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "rxl": "1024px",
        "2xl": "1400px",
        "7xl": "1320px",
        "8xl": "1440px",
      },
    },
    extend: {
      colors: {
        DarkBackground: "#020817",
        LightBackground: "#ffff",
        light_text: "#333549",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ["primary-blue"]: {
          DEFAULT: "#3F83F8",
          50: "#EBF5FF",
          100: "#E1EFFE",
          200: "#C3DDFD",
          300: "#A4CAFE",
          400: "#76A9FA",
          500: "#3F83F8",
          600: "#1C64F2",
          700: "#1A56DB",
          800: "#1E429F",
          900: "#233876",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      screens: {
        "7xl": "1320px",
        "8xl": "1440px"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
