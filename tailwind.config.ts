import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgSecondary: "#F9FAFB",
        borderPrimary: "#D0D5DD",
        borderSecondary: "#EAECF0",
        textPrimary: "#101828",
        textTertiary: "#475467",
        btnBgPrimary: "#7F56D9",
        btnTextPrimary: "#FFFFFF",
        btnBorderPrimary: "#7F56D9",
        btnShadowColor: "#1018280D",
      },
    },
  },
  plugins: [],
};
export default config;
