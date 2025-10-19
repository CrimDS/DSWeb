import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
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
        border: "#1a2332",
        input: "#0f1419",
        ring: "#22d3ee",
        background: "#0f1419",
        foreground: "#f5f7fa",
        primary: {
          DEFAULT: "#22d3ee",
          foreground: "#0f1419",
        },
        secondary: {
          DEFAULT: "#a855f7",
          foreground: "#f5f7fa",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#f5f7fa",
        },
        muted: {
          DEFAULT: "#374151",
          foreground: "#b3bac3",
        },
        accent: {
          DEFAULT: "#22d3ee",
          foreground: "#0f1419",
        },
        popover: {
          DEFAULT: "#1a2332",
          foreground: "#f5f7fa",
        },
        card: {
          DEFAULT: "#1a2332",
          foreground: "#f5f7fa",
        },
        sidebar: {
          DEFAULT: "#111827",
          foreground: "#f5f7fa",
          primary: "#22d3ee",
          "primary-foreground": "#0f1419",
          accent: "#a855f7",
          "accent-foreground": "#f5f7fa",
          border: "#1a2332",
          ring: "#22d3ee",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        violet: {
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
