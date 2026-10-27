import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta pastel lilás do projeto "Meninas que Transformam"
        lilac: {
          DEFAULT: "#B692D9", // lilás principal (botões, destaques)
          light: "#E9DDF5", // lilás claro (superfícies, cards)
          dark: "#8A63B8", // variação para hover/foco
        },
        lavender: "#F6F1FB", // lavanda de fundo
        blush: "#E7B8D1", // acento rosado
        ink: "#3B2E4A", // texto escuro
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(59, 46, 74, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
